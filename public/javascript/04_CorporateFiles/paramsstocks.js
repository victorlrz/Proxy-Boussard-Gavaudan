let params = [
  {
    id: 59,
    identifier: "ASC:LSE",
    titleSeed: "Document d'enregistrement universel 2019",
    url:
      "https://www.lvmh.fr/actionnaires/investisseurs-et-analystes/publications/?publications=29",
    listTitleSelector: "#js-finances-publications > li:nth-child(INDEX)",
    listTitleSelector2: "",
    listLinkSelector:
      "#js-finances-publications > li:nth-child(INDEX) > div.media__bloctxt > a",
    listDateSelector:
      "#js-finances-publications > li:nth-child(INDEX) > div > a > div.media__txt.teasing-1 > small",
    listDateSelector2: "",
    dateMethod: "textContent",
    titleMethod: "getAttribute",
    titleAttribute: "data-document-title",
    urlMethod: "getAttribute",
    urlAttribute: "href",
    dateConverter: function (date) {
      const cutDate = ("1 " + date.slice(0, date.indexOf("20") + 4)).split(" "); //On récupère l'index du premier 20XX puis on ajoute 4 caractères pour conserver l'année.
      let month = cutDate[1];
      switch (month) {
        case "JANVIER":
          month = 0;
          break;
        case "FÉVRIER":
          month = 1;
          break;
        case "MARS":
          month = 2;
          break;
        case "AVRIL":
          month = 3;
          break;
        case "MAI":
          month = 4;
          break;
        case "JUIN":
          month = 5;
          break;
        case "JUILLET":
          month = 6;
          break;
        case "AOÛT":
          month = 7;
          break;
        case "SEPTEMBRE":
          month = 8;
          break;
        case "OCTOBRE":
          month = 9;
          break;
        case "NOVEMBRE":
          month = 10;
          break;
        case "DÉCEMBRE":
          month = 11;
          break;
      }
      const isoDate = new Date(cutDate[2], month, cutDate[0], 2);
      return isoDate;
    },
  },
  {
    id: 1,
    identifier: "ALO:PAR",
    titleSeed:
      "Creation of a global leader in Mobility (présentation en anglais)",
    url: "https://www.alstom.com/fr/finance/presentations-investisseurs",
    listTitleSelector:
      "#block-alstom-contenudelapageprincipale > div > section:nth-child(4) > div > div.grid.trailer-60 > div > div > ul > li:nth-child(INDEX) > div > div.document__content > a > h4",
    listTitleSelector2: "",
    listLinkSelector:
      "#block-alstom-contenudelapageprincipale > div > section:nth-child(4) > div > div.grid.trailer-60 > div > div > ul > li:nth-child(INDEX) > div > div.document__download-icon.icon-link.icon-round--big.js-slider-fs--download > a",
    listDateSelector:
      "#block-alstom-contenudelapageprincipale > div > section:nth-child(4) > div > div.grid.trailer-60 > div > div > ul > li:nth-child(INDEX) > div > div.document__content > div > span.document__date",
    listDateSelector2: "",
    dateMethod: "textContent",
    dateAttribute: "",
    titleMethod: "textContent",
    titleAttribute: "",
    urlMethod: "getAttribute",
    urlAttribute: "href",
    dateConverter: function (date) {
      const cutDate = date.split(" "); //On récupère l'index du premier 20XX puis on ajoute 4 caractères pour conserver l'année.
      let month = cutDate[1];
      switch (month) {
        case "jan":
          month = 0;
          break;
        case "fév":
          month = 1;
          break;
        case "mar":
          month = 2;
          break;
        case "avr":
          month = 3;
          break;
        case "mai":
          month = 4;
          break;
        case "juin":
          month = 5;
          break;
        case "jui":
          month = 6;
          break;
        case "août":
          month = 7;
          break;
        case "sep":
          month = 8;
          break;
        case "oct":
          month = 9;
          break;
        case "nov":
          month = 10;
          break;
        case "déc":
          month = 11;
          break;
      }
      const isoDate = new Date(cutDate[2], month, cutDate[0], 2);
      return isoDate;
    },
  },
  {
    id: 4,
    identifier: "SAPX:GER",
    titleSeed: "SAP 2020 Q1 Quartalsmitteilung",
    url: "https://www.sap.com/investors/en/reports.html",
    listTitleSelector:
      "#item_1576142136603 > div.finder.carousel-initialized > div.search-results.filter > div > div > div > div.slick-slide.slick-current.slick-active > div:nth-child(1) > div:nth-child(INDEX) > a > div.headline.ds-heading--s.ds-m-b-m",
    listTitleSelector2: "",
    listLinkSelector:
      "#item_1576142136603 > div.finder.carousel-initialized > div.search-results.filter > div > div > div > div.slick-slide.slick-current.slick-active > div:nth-child(1) > div:nth-child(INDEX) > a",
    listDateSelector:
      "#item_1576142136603 > div.finder.carousel-initialized > div.search-results.filter > div > div > div > div.slick-slide.slick-current.slick-active > div:nth-child(1) > div:nth-child(INDEX) > a > div.headline.ds-heading--s.ds-m-b-m",
    listDateSelector2: "",
    dateMethod: "textContent",
    dateAttribute: "",
    titleMethod: "textContent",
    titleAttribute: "",
    urlMethod: "getAttribute",
    urlAttribute: "href",
    dateConverter: function (date) {
      const cutDate = date.split(" "); //On récupère l'index du premier 20XX puis on ajoute 4 caractères pour conserver l'année.
      const isoDate = new Date(cutDate[1], 0, 1, 2);
      return isoDate;
    },
  },
  {
    id: 5,
    identifier: "AKZA:AEX",
    titleSeed: " Investor update -2020 and beyond",
    url: "https://www.akzonobel.com/en/for-investors/all-reports",
    listTitleSelector:
      "body > div.layout-full-width.pt-reports-overview.reports-search-results > div > div.background-gradient.teaser-remove-padding > section > div.background-gradient > div > div > div > div.view-content > div > ul > li:nth-child(INDEX) > a > div.overlay > h3",
    listTitleSelector2:
      "body > div.layout-full-width.pt-reports-overview.reports-search-results > div > div.background-gradient.teaser-remove-padding > section > div.background-gradient > div > div > div > div.view-content > div > ul > li:nth-child(INDEX) > a > h3",
    listLinkSelector:
      "body > div.layout-full-width.pt-reports-overview.reports-search-results > div > div.background-gradient.teaser-remove-padding > section > div.background-gradient > div > div > div > div.view-content > div > ul > li:nth-child(INDEX) > a",
    listDateSelector:
      "body > div.layout-full-width.pt-reports-overview.reports-search-results > div > div.background-gradient.teaser-remove-padding > section > div.background-gradient > div > div > div > div.view-content > div > ul > li:nth-child(INDEX) > a > div.overlay > time",
    listDateSelector2:
      "body > div.layout-full-width.pt-reports-overview.reports-search-results > div > div.background-gradient.teaser-remove-padding > section > div.background-gradient > div > div > div > div.view-content > div > ul > li:nth-child(INDEX) > a > time > span",
    dateMethod: "textContent",
    dateAttribute: "",
    titleMethod: "textContent",
    titleMethod2: "getAttribute",
    titleAttribute2: "title",
    urlMethod: "getAttribute",
    urlAttribute: "href",
    dateConverter: function (date) {
      const cutDate = date.split(" "); //On récupère l'index du premier 20XX puis on ajoute 4 caractères pour conserver l'année.
      let month = cutDate[0];
      switch (month) {
        case "Jan":
          month = 0;
          break;
        case "Feb":
          month = 1;
          break;
        case "Mar":
          month = 2;
          break;
        case "Apr":
          month = 3;
          break;
        case "May":
          month = 4;
          break;
        case "Jun":
          month = 5;
          break;
        case "Jul":
          month = 6;
          break;
        case "Aug":
          month = 7;
          break;
        case "Sep":
          month = 8;
          break;
        case "Oct":
          month = 9;
          break;
        case "Nov":
          month = 10;
          break;
        case "Dec":
          month = 11;
          break;
      }
      const day = cutDate[1].slice(0, 2);
      const isoDate = new Date(cutDate[2], month, day, 2);
      return isoDate;
    },
    addURL: true,
    addPrefixURL: "https://www.akzonobel.com",
  },
  {
    id: 7,
    identifier: "SAN:PAR",
    titleSeed: "2019 Integrated Report",
    url:
      "https://www.sanofi.com/en/investors/reports-and-publications/financial-and-csr-reports",
    listTitleSelector:
      "#content > div > div > div.osw-page-content > div.osw-page-content-inside.osw-bg-white > div.osw-page-content-inside-middle > div > div > div:nth-child(1) > div > div > div > div.osw-container-container-content-middle > div > div > div:nth-child(INDEX) > div > div > div.osw-contentblock-imagefull-container-content > div > div > div.osw-contentblock-title > h4",
    listTitleSelector2: "",
    listLinkSelector:
      "#content > div > div > div.osw-page-content > div.osw-page-content-inside.osw-bg-white > div.osw-page-content-inside-middle > div > div > div:nth-child(1) > div > div > div > div.osw-container-container-content-middle > div > div > div:nth-child(INDEX) > div > div > div.osw-contentblock-imagefull-container-content > div > div > div.osw-contentblock-maintext.field-text > ul > li > a",
    listDateSelector:
      "#content > div > div > div.osw-page-content > div.osw-page-content-inside.osw-bg-white > div.osw-page-content-inside-middle > div > div > div:nth-child(1) > div > div > div > div.osw-container-container-content-top > div.osw-container-title",
    listDateSelector2: "",
    dateMethod: "textContent",
    titleMethod: "textContent",
    titleAttribute2: "",
    urlMethod: "getAttribute",
    urlAttribute: "href",
    dateConverter: function (date) {
      const cutDate = date.split(" "); //On récupère l'index du premier 20XX puis on ajoute 4 caractères pour conserver l'année.
      const isoDate = new Date(cutDate[0], 0, 1, 2);
      return isoDate;
    },
    addURL: true,
    addPrefixURL: "https://www.sanofi.com",
  },
];

module.exports = {
  params,
};
