//Router
const home = require("./01_home");
const financialtime = require("./02_financialtime");
const morningstar = require("./03_morningstar"); //Router
const corporate = require("./04_corporatefiles");
// const test = require("../public/javascript/05_Seed_Portfolio/seed");

//Main function
const scrapersFinancialTime = require("../public/javascript/02_FinancialTime/scrapingft.js");
const scrapersMorningStar = require("../public/javascript/03_MorningStar/scrapingstar.js");

function timer() {
  date = new Date();
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
  resultat = h + ":" + m + ":" + s;
  console.log(resultat); //Affiche l'heure
  if ((h == 08 && m == 00 && s == 00) || (h == 13 && m == 15 && s == 00)) {
    //7h London et 21h London h-2 paris/serv
    scrapersMorningStar.morningStarMain();
  } else if (
    (h == 06 && m == 00 && s == 00) ||
    (h == 11 && m == 00 && s == 00) ||
    (h == 14 && m == 00 && s == 00) ||
    (h == 17 && m == 00 && s == 00)
  ) {
    //7h London et 21h London h-2 paris/serv
    scrapersFinancialTime.articlesMain();
  }
}

function launch() {
  const id = setInterval(timer, 1000);
  return id;
}

launch();

module.exports = (app) => {
  //Routes
  app.use(home);
  app.use(financialtime);
  app.use(morningstar);
  // app.use(corporate);
  // app.use(test);
};
