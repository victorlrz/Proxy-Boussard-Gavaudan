const puppeteer = require("puppeteer");
const setStocksParams = require("./paramsstocks.js");
const setDatabaseParams = require("./paramsdatabase.js");
const LENGTH_SELECTOR_CLASS = "report-table-row";
const CURRENT_VALUATION_SELECTOR =
  "#__layout > div > div.mdc-page-shell__content.mds-page-shell__content > main > div.stock__content > div > div > div.mdc-column.mds-layout-grid__col.stock__content-sal.mds-layout-grid__col--12.mds-layout-grid__col--auto-at-1092 > sal-components > section > div > div > div > div > div:nth-child(2) > div > div.sal-component-body > div > div > table.report-table.ng-isolate-scope > tbody > tr:nth-child(INDEX) > td:nth-child(12) > span";

const CURRENT_NAME_SELECTOR =
  "#__layout > div > div.mdc-page-shell__content.mds-page-shell__content > main > div.stock__content > div > div > div.mdc-column.mds-layout-grid__col.stock__content-sal.mds-layout-grid__col--12.mds-layout-grid__col--auto-at-1092 > sal-components > section > div > div > div > div > div:nth-child(2) > div > div.sal-component-body > div > div > table.fixed-table > tr:nth-child(INDEX) > td > span";

//@getDatabaseId : Initialisation des paramètres
const getDatabaseId = async () => {
  try {
    const getID = await setDatabaseParams.getScrapedFileLastIdDatabase();
    //Initialisation de la recherche, s'il n'y a pas d'ID dans la DB on l'initialise le compteur à 0;
    const lastID = getID.results[0] == undefined ? 0 : getID.results[0].id;
    // console.log(lastID); //Debug
    return lastID;
  } catch (e) {
    console.log(`error in getDatabaseId: ${e}`);
  }
};

//@getMorningValuesStock permet de savoir si un stock est déjà instancié dans la DB
const getMorningValuesStock = async (index) => {
  try {
    const getValues = await setDatabaseParams.getScrapedFileLastMorningStock(
      setStocksParams.params[index].id
    );
    //Initialisation de la recherche, s'il n'y a pas de titres dans la DB pour le stock[index] avec is_file_scraped == true; On prend le titre depuis la seed
    const isInit = getValues.results[0] == undefined ? false : true;
    // console.log(isInit); //Debug
    return isInit;
  } catch (e) {
    console.log(`error in getMorningValuesStock: ${e}`);
  }
};

//@scrapersMorningStar :  Scrap MorningStar with Puppeteer
const scrapersMorningStar = async (url) => {
  try {
    let morningStarValuation = [];
    // const browser = await puppeteer.launch({ headless: false }); //DEBUG
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitFor("body");
    await page.waitFor(2000); //Simulates human behaviour

    let listLength = await page.evaluate((sel) => {
      return document.getElementsByClassName(sel).length / 2; //Divide number of lines
    }, LENGTH_SELECTOR_CLASS);
    // console.log(listLength); //Debug

    for (let i = 3; i <= listLength + 1; i++) {
      // change the index to the next child
      let currentIdValuationValue = CURRENT_VALUATION_SELECTOR.replace(
        "INDEX",
        i
      );
      let currentIdValuationName = CURRENT_NAME_SELECTOR.replace("INDEX", i);

      let currentValue = await page.evaluate((sel) => {
        let element = document.querySelector(sel);
        return element ? element.innerHTML : "—";
      }, currentIdValuationValue);

      let currentName = await page.evaluate((sel) => {
        let element = document.querySelector(sel);
        return element ? element.innerHTML : "—";
      }, currentIdValuationName);

      console.log(currentName + ": ", currentValue); //Debug

      morningStarValuation.push({ name: currentName, value: currentValue });
    }
    // console.log(morningStarValuation); //Debug
    browser.close();
    return morningStarValuation;
  } catch (e) {
    console.log(`error in scrapersMorningStar: ${e}`);
  }
};

function findWithAttr(array, attr, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

const uploadFilesToDatabase = async (values, index) => {
  try {
    let id = Number(await getDatabaseId()) + 1;
    const currentPriceSales =
      findWithAttr(values, "name", "Price/Sales") == -1
        ? "—"
        : values[findWithAttr(values, "name", "Price/Sales")].value;
    const currentPriceEarnings =
      findWithAttr(values, "name", "Price/Earnings") == -1
        ? "—"
        : values[findWithAttr(values, "name", "Price/Earnings")].value;
    const currentPriceCashflow =
      findWithAttr(values, "name", "Price/Cash Flow") == -1
        ? "—"
        : values[findWithAttr(values, "name", "Price/Cash Flow")].value;
    const currentPriceBook =
      findWithAttr(values, "name", "Price/Book") == -1
        ? "—"
        : values[findWithAttr(values, "name", "Price/Book")].value;
    const currentPriceFrwrdEarnings =
      findWithAttr(values, "name", "Price/Forward Earnings") == -1
        ? "—"
        : values[findWithAttr(values, "name", "Price/Forward Earnings")].value;
    const currentEarningYield =
      findWithAttr(values, "name", "Earnings Yield %") == -1
        ? "—"
        : values[findWithAttr(values, "name", "Earnings Yield %")].value;
    let currentEnterpriseValue;
    if (findWithAttr(values, "name", "Enterprise Value (Mil)") == -1) {
      if (findWithAttr(values, "name", "Enterprise Value (Bil)") == -1) {
        currentEnterpriseValue = "—";
      } else {
        currentEnterpriseValue =
          values[findWithAttr(values, "name", "Enterprise Value (Bil)")].value;
      }
    } else {
      currentEnterpriseValue =
        values[findWithAttr(values, "name", "Enterprise Value (Mil)")].value;
    }
    const currentEnterpriseValueEbit =
      findWithAttr(values, "name", "Enterprise Value/EBIT") == -1
        ? "—"
        : values[findWithAttr(values, "name", "Enterprise Value/EBIT")].value;
    const currentEnterpriseValueEbitda =
      findWithAttr(values, "name", "Enterprise Value/EBITDA") == -1
        ? "—"
        : values[findWithAttr(values, "name", "Enterprise Value/EBITDA")].value;

    if (await getMorningValuesStock(index)) {
      let body = [
        setStocksParams.params[index].id,
        currentPriceSales,
        currentPriceEarnings,
        currentPriceCashflow,
        currentPriceBook,
        currentPriceFrwrdEarnings,
        currentEarningYield,
        currentEnterpriseValue,
        currentEnterpriseValueEbit,
        currentEnterpriseValueEbitda,
        new Date().toISOString(),
      ];
      console.log(body);
      await setDatabaseParams.updateScrapedFileIntoDatabase(body);
      console.log("stock: " + setStocksParams.params[index].name + " updated ");
    } else {
      let body = [
        id,
        currentPriceSales,
        currentPriceEarnings,
        currentPriceCashflow,
        currentPriceBook,
        currentPriceFrwrdEarnings,
        currentEarningYield,
        currentEnterpriseValue,
        currentEnterpriseValueEbit,
        currentEnterpriseValueEbitda,
        setStocksParams.params[index].id,
        new Date().toISOString(),
        new Date().toISOString(),
      ];
      const res = await setDatabaseParams.postScrapedFileIntoDatabase(body);
      console.log(res);
      console.log("stock: " + setStocksParams.params[index].name + " created ");
    }
  } catch (e) {
    console.log(`error in uploadFilesToDatabase: ${e}`);
  }
};

const morningStarMain = async () => {
  try {
    const initUpdate = getDate();
    console.log("Début de la mise à jour du MorningStar le : " + initUpdate);
    for (let i = 0; i < setStocksParams.params.length; i++) {
      // console.log(setStocksParams.params.length); //Debug length
      const values = await scrapersMorningStar(
        setStocksParams.params[i].mgstar
      );
      // console.log(values); //Debug
      await uploadFilesToDatabase(values, i);
    }
    const endUpdate = getDate();
    console.log("Fin de la mise à jour du MorningStar le : " + endUpdate);
  } catch (e) {
    console.log(`error in morningStarMain: ${e}`);
  }
};

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
  morningStarMain,
};

//TEST CASE
// morningStarMain();

//Reset fundamentals db
// setDatabaseParams.resetDataTable();
