const cloudinary = require("cloudinary").v2;
const puppeteer = require("puppeteer");
const setStocksParams = require("./paramsstocks.js");
const setDatabaseParams = require("./paramsdatabase.js");

//@Initialisation des paramètres
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

const getLastTitleStock = async (index) => {
  try {
    const getTitle = await setDatabaseParams.getScrapedFileLastTitleStock(
      setStocksParams.params[index].id
    );
    //Initialisation de la recherche, s'il n'y a pas de titres dans la DB pour le stock[index] avec is_file_scraped == true; On prend le titre depuis la seed
    const lastTitle =
      getTitle.results[0] == undefined
        ? setStocksParams.params[index].titleSeed
        : getTitle.results[0].title;
    // console.log(lastTitle);
    return lastTitle;
  } catch (e) {
    console.log(`error in getLastTitleStock: ${e}`);
  }
};

let news = [];
//@addHealine : add a title to headlines array.
const addNews = (date, title, url, link) => {
  news.push({
    date,
    title,
    url,
    link,
  });
};

const scrapersCorporateFiles = async (params, lastTitle) => {
  try {
    // const browser = await puppeteer.launch({
    //   headless: false,
    // });
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.goto(params.url);
    await page.waitFor("body");
    await page.waitFor(2000); //Simulates human behaviour
    //Resets
    news = [];
    let i = 1;
    let title = "";
    while (title !== lastTitle) {
      // change the index to the next child
      let dateSelector = params.listDateSelector.replace("INDEX", i);
      let dateSelector2 = params.listDateSelector2.replace("INDEX", i);
      let titleSelector = params.listTitleSelector.replace("INDEX", i);
      let titleSelector2 = params.listTitleSelector2.replace("INDEX", i);
      let downloadSelector = params.listLinkSelector.replace("INDEX", i);

      let date = await page.evaluate(
        (sel, sel2, params) => {
          if (params.dateMethod === "getAttribute") {
            return document
              .querySelector(sel)
              .getAttribute(params.dateAttribute);
          } else if (params.dateMethod === "textContent") {
            if (document.querySelector(sel) !== null) {
              return document.querySelector(sel).textContent;
            } else {
              return document.querySelector(sel2).textContent;
            }
          }
        },
        dateSelector,
        dateSelector2,
        params
      );

      title = await page.evaluate(
        (sel, sel2, params) => {
          if (params.titleMethod === "getAttribute") {
            return document
              .querySelector(sel)
              .getAttribute(params.titleAttribute);
          } else if (params.titleMethod === "textContent") {
            if (document.querySelector(sel) !== null) {
              return document.querySelector(sel).textContent;
            } else {
              if (params.titleMethod2 === "getAttribute") {
                return document
                  .querySelector(sel2)
                  .getAttribute(params.titleAttribute2);
              } else if (params.titleMethod2 === "textContent") {
                return document.querySelector(sel2).textContent;
              }
            }
          }
        },
        titleSelector,
        titleSelector2,
        params
      );

      let url = await page.evaluate(
        (sel, params) => {
          if (params.urlMethod === "getAttribute") {
            return document
              .querySelector(sel)
              .getAttribute(params.urlAttribute);
          }
        },
        downloadSelector,
        params
      );

      if (params.addURL == true) {
        url = params.addPrefixURL + url;
      }

      console.log(params.dateConverter(date), title, url); //DEBUG
      addNews(params.dateConverter(date), title, url, null);
      i++;
    }
    news.pop();
    browser.close();
    return news;
  } catch (e) {
    console.log(`error in scrapersCorporateFiles: ${e}`);
  }
};

const cloudinaryUploadMethod = async (url) => {
  try {
    const res = await cloudinary.uploader.upload(url);
    return res;
  } catch (e) {
    e;
  }
};

//Upload to Cloudinary Database
const uploadFilesToCloudinary = async () => {
  for (const i in news) {
    if (news[i].url.endsWith(".pdf")) {
      const data = await cloudinaryUploadMethod(news[i].url);
      //Si Upload fail
      if (data == undefined) {
        news[i].link = news[i].url;
        news[i].url = "toBigFile";
        //Sinon
      } else {
        news[i].url = data.public_id;
        news[i].link = null;
      }
    } else {
      //Si ce n'est pas un pdf on permute cloudinary et comment_link
      news[i].link = news[i].url;
      news[i].url = null;
    }
  }
  return news;
};

const uploadFilesToDatabase = async (news, index) => {
  news = news.reverse(); //Nécessaire, sinon les éléments les plus récents seront ajoutés en premier à la DB. news.push -> el + récent aura id le plus petit
  for (const i in news) {
    let id = Number(await getDatabaseId()) + 1;
    let values = [
      id,
      news[i].date,
      setStocksParams.params[index].id,
      news[i].title,
      news[i].url,
      news[i].link,
      new Date().toISOString(),
      new Date().toISOString(),
    ];
    const res = await setDatabaseParams.postScrapedFileIntoDatabase(values);
    console.log(res);
  }
};

const corporateFilesMain = async () => {
  for (let i = 0; i < setStocksParams.params.length; i++) {
    let lastTitle = await getLastTitleStock(i);
    console.log(lastTitle);
    if (lastTitle) {
      await scrapersCorporateFiles(setStocksParams.params[i], lastTitle);
      await uploadFilesToCloudinary();
      await uploadFilesToDatabase(news, i);
    }
  }
};

// Exports response
module.exports = {
  corporateFilesMain,
};
