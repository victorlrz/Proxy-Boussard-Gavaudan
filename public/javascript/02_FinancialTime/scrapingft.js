// console.log(require("dotenv").config()); //Useful debug
require("dotenv").config();
const fetch = require("node-fetch");
const secretKey = process.env.FT_KEY;

const setStocksParams = require("./paramsstocks.js");
const setDatabaseParams = require("./paramsdatabase.js");

let headlines = [];

//@getParams : On récupère le nom et l'identifiant du stock puis on set les params de la requête.
const getParams = (stockName, stockId, specialParams) => {
  let extendedParams = "";
  if (specialParams.length > 0) {
    extendedParams = "OR";
    for (let i = 0; i < specialParams.length; i++) {
      i == 0
        ? (extendedParams += ` "${specialParams[i]}"`)
        : (extendedParams += ` OR "${specialParams[i]}"`);
    }
  }

  const today = new Date();
  let rollingWindow = new Date();
  rollingWindow.setTime(today.getTime() - 31622400000);
  rollingWindow = rollingWindow.toISOString().toString().slice(0, 10);
  const queryContextParam = `(title:"${stockName}" OR title:"${stockId}" OR "${stockName}" OR "${stockId}" ${extendedParams}) AND (lastPublishDateTime:>${rollingWindow}T00:00:00Z)`;
  console.log(queryContextParam);
  //We set parameters
  const searchParam = {
    queryString: queryContextParam,
    queryContext: {
      curations: ["ARTICLES"], //We'r just looking for ARTICLES
    },
    resultContext: {
      aspects: ["title", "lifecycle"], //Response include title and lifecyle of an article
      // maxResults: 20, Not needed -> Rolling Window
    },
  };
  return searchParam;
};

//@addHealine : add a title to headlines array.
const addHeadline = (date, title, url) => {
  headlines.push({
    date,
    title,
    url,
  });
};

//@scapersFinancialTime
const scrapersFinancialTime = async (searchParam) => {
  headlines = [];
  const url = "https://api.ft.com/content/search/v1";
  const json = JSON.stringify(searchParam);
  try {
    const response = await fetch(url, {
      method: "POST",
      body: json,
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": secretKey,
      },
    });
    if (response.ok) {
      const dataAPI = await response.json();
      if (dataAPI.results[0].results) {
        // i varies from 0 to maxResults of the parameters OR i varies from 0 to the number of titles returned since the date defined in the parameters.
        for (let i = 0; i < dataAPI.results[0].results.length; i++) {
          let date = new Date(
            dataAPI.results[0].results[i].lifecycle.lastPublishDateTime
          );
          addHeadline(
            date.toLocaleDateString(),
            dataAPI.results[0].results[i].title.title,
            dataAPI.results[0].results[i].id
          );
        }
      } else {
        console.log(
          `Pas de résultats, merci d'affiner votre recherche.. REQUEST : ${searchParam.queryString}`
        );
      }
      // console.log(headlines);
      return headlines;
    }
  } catch (e) {
    console.error("error in scrapersFinancialTime : ", e);
  }
};

// const test = async () => { //Debug -> npm start
//   await scrapersFinancialTime(
//     getParams(
//       setStocksParams.params[0].name,
//       setStocksParams.params[0].identifier,
//       setStocksParams.params[0].params
//     )
//   );
//   console.log(headlines);
// };
// test();

//@FindIndexTitle: Fonction qui permet de récupérer l'index du dernier titre dans la DB pour le stock X en fonction des données scrapées
const findIndexTitle = async (databaseTitle, index) => {
  try {
    const titles = await scrapersFinancialTime(
      getParams(
        setStocksParams.params[index].name,
        setStocksParams.params[index].identifier,
        setStocksParams.params[index].params
      )
    );
    if (titles !== undefined) {
      for (let i = 0; i < titles.length; i++) {
        if (titles[i].title == databaseTitle) {
          //console.log("The one :", i); //Debug
          return i;
        } else if (i == titles.length - 1) {
          return titles.length;
        }
      }
    }
  } catch (e) {
    console.error("error in findIndexTitle : ", e);
  }
};

const getDatabaseLastTitleStock = async (id) => {
  try {
    const resQuery = await setDatabaseParams.getLastTitleStock(id);
    const lastTitle =
      resQuery.results[0] == null ? "" : resQuery.results[0].title;
    return lastTitle;
  } catch (e) {
    console.error("error in getDatabaseLastTitleStock : ", e);
  }
};

const getDatabaseLastArticleId = async () => {
  try {
    const resQuery = await setDatabaseParams.getLastArticleIdDatabase();
    const lastArticleId =
      resQuery.results[0] == null ? 0 : resQuery.results[0].id;
    return lastArticleId;
  } catch (e) {
    console.error("error in getDatabaseLastArticleId : ", e);
  }
};

const postArticleToDatabase = async (values) => {
  try {
    await setDatabaseParams.postArticlesIntoDatabase(values);
  } catch (e) {
    console.error("error in postArticleToDatabse : ", e);
  }
};

const articlesMain = async () => {
  try {
    const initUpdate = getDate();
    console.log("Début de la mise à jour du FinancialTime le : " + initUpdate);
    for (let i = 0; i < setStocksParams.params.length; i++) {
      let currentArticleId = 0;
      const lastTitle = await getDatabaseLastTitleStock(
        setStocksParams.params[i].stockId
      );
      // console.log(lastTitle); //DEBUG
      const indexTitle = await findIndexTitle(lastTitle, i);
      // console.log(indexTitle); //DEBUG -> undefined = Pas de résultats, affiner la recherche
      currentArticleId = Number(await getDatabaseLastArticleId());
      if (indexTitle !== undefined) {
        for (let j = indexTitle - 1; j >= 0; j--) {
          //On reverse la liste des headlines
          currentArticleId += 1;
          // console.log(currentArticleId); //DEBUG
          let values = [
            currentArticleId,
            headlines[j].date,
            headlines[j].title,
            headlines[j].url,
            setStocksParams.params[i].stockId,
            new Date().toISOString(),
            new Date().toISOString(),
          ];
          console.log(values); //DEBUG
          await postArticleToDatabase(values);
        }
      }
      await sleep(250);
    }
    const endUpdate = getDate();
    console.log("Fin de la mise à jour du MorningStar le : " + endUpdate);
  } catch (e) {
    console.error("error in articlesMain : ", e);
  }
};

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getDate() {
  date = new Date();
  annee = date.getFullYear();
  moi = date.getMonth();
  mois = new Array(
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  );
  j = date.getDate();
  jour = date.getDay();
  jours = new Array(
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  );
  h = date.getHours();
  if (h < 10) {
    h = "0" + h;
  }
  m = date.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }
  s = date.getSeconds();
  if (s < 10) {
    s = "0" + s;
  }
  resultat =
    jours[jour] +
    " " +
    j +
    " " +
    mois[moi] +
    " " +
    annee +
    " il est " +
    h +
    ":" +
    m +
    ":" +
    s;
  return resultat;
}

//Exports response
module.exports = {
  scrapersFinancialTime,
  articlesMain,
};

//Reset articles db
// setDatabaseParams.resetDataTable();
