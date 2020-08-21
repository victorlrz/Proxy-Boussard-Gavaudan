let params = [
  //Ordre important
  {
    id: 1,
    name: "ALSTOM",
    mgstar: "https://www.morningstar.com/stocks/pinx/aomff/valuation",
  },
  // { //DEPRECATED
  //   id: 2,
  //   name: "ALTRAN TECHNOLOGIES SA",
  //   mgstar: "",
  // },
  {
    id: 3,
    name: "ATOS",
    mgstar: "https://www.morningstar.com/stocks/xnas/atos/valuation",
  },
  {
    id: 4,
    name: "SAP AG",
    mgstar: "https://www.morningstar.com/stocks/pinx/sapx/valuation",
  },
  {
    id: 5,
    name: "AKZO NOBEL",
    mgstar: "https://www.morningstar.com/stocks/pinx/akzof/valuation",
  },
  {
    id: 6,
    name: "ROCHE HOLDING AG-GENUSSCHEIN",
    mgstar: "https://www.morningstar.com/stocks/pinx/rhhby/valuation",
  },
  {
    id: 7,
    name: "SANOFI",
    mgstar: "https://www.morningstar.com/stocks/pinx/snynf/valuation",
  },
  {
    id: 8,
    name: "AXA SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/axahf/valuation",
  },
  {
    id: 9,
    name: "SMITH NEPHEW PLC",
    mgstar: "https://www.morningstar.com/stocks/pinx/snnuf/valuation",
  },
  {
    id: 10,
    name: "SAFRAN SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/safrf/valuation",
  },
  {
    id: 11,
    name: "DANONE",
    mgstar: "https://www.morningstar.com/stocks/pinx/gpdnf/valuation",
  },
  {
    id: 12,
    name: "CRODA INTERNATIONAL PLC",
    mgstar: "https://www.morningstar.com/stocks/pinx/coihy/valuation",
  },
  {
    id: 13,
    name: "RSA INSURANCE GROUP PLC",
    mgstar: "https://www.morningstar.com/stocks/pinx/rsaif/valuation",
  },
  {
    id: 14,
    name: "INTERCONTINENTAL HOTELS GROU",
    mgstar: "https://www.morningstar.com/stocks/grey/ichgf/valuation",
  },
  {
    id: 15,
    name: "BNP PARIBAS SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/bnpqf/valuation",
  },
  {
    id: 16,
    name: "TOTAL SA",
    mgstar: "https://www.morningstar.com/stocks/xnys/tot/valuation",
  },
  {
    id: 17,
    name: "VODAFONE GROUP PLC",
    mgstar: "https://www.morningstar.com/stocks/xnas/vod/valuation",
  },
  {
    id: 18,
    name: "BAYER AG-REG",
    mgstar: "https://www.morningstar.com/stocks/pinx/bayzf/valuation",
  },
  {
    id: 19,
    name: "ROYAL DUTCH PETROLEUM CO EUR (RDS A)",
    mgstar: "https://www.morningstar.com/stocks/xpra/rdsa/valuation",
  },
  {
    id: 20,
    name: "OSRAM LICHT AG",
    mgstar: "https://www.morningstar.com/stocks/pinx/osagf/valuation",
  },
  {
    id: 21,
    name: "BANCO SANTANDER SA",
    mgstar: "https://www.morningstar.com/stocks/xnys/san/valuation",
  },
  {
    id: 22,
    name: "COMPAGNIE DE SAINT-GOBAIN",
    mgstar: "https://www.morningstar.com/stocks/pinx/codgf/valuation",
  },
  {
    id: 23,
    name: "ENGIE",
    mgstar: "https://www.morningstar.com/stocks/pinx/engqf/valuation",
  },
  {
    id: 24,
    name: "VIVENDI",
    mgstar: "https://www.morningstar.com/stocks/pinx/vivef/valuation",
  },
  {
    id: 25,
    name: "KONINKLIJKE KPN NV",
    mgstar: "https://www.morningstar.com/stocks/pinx/vopkf/valuation",
  },
  {
    id: 26,
    name: "THALES SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/thlef/valuation",
  },
  // { //nil
  //   id: 27,
  //   name: "METRO WHOLESALE & FOOD SPECI",
  //   mgstar: "",
  // },
  {
    id: 28,
    name: "INNOGY SE",
    mgstar: "https://www.morningstar.com/stocks/chix/igyd/valuation",
  },
  {
    id: 29,
    name: "BUREAU VERITAS SA",
    mgstar: "https://www.morningstar.com/stocks/grey/bvvby/valuation",
  },
  {
    id: 30,
    name: "COMPAGNIE GENERALE DE GEOPHYSIQUE",
    mgstar: "https://www.morningstar.com/stocks/grey/cgpvf/valuation",
  },
  {
    id: 31,
    name: "ABN AMRO GROUP N.V",
    mgstar: "https://www.morningstar.com/stocks/pinx/abmrf/valuation",
  },
  {
    id: 32,
    name: "WIRECARD AG",
    mgstar: "https://www.morningstar.com/stocks/pinx/wrcdf/valuation",
  },
  {
    id: 33,
    name: "SPIE SA",
    mgstar: "https://www.morningstar.com/stocks/xpar/spie/valuation",
  },
  {
    id: 34,
    name: "BARCLAYS PLC",
    mgstar: "https://www.morningstar.com/stocks/pinx/bclyf/valuation",
  },
  {
    id: 35,
    name: "FERROVIAL SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/frrvf/valuation",
  },
  {
    id: 36,
    name: "DASSAULT AVIATION SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/duavf/valuation",
  },
  {
    id: 37,
    name: "FAURECIA",
    mgstar: "https://www.morningstar.com/stocks/pinx/furcf/valuation",
  },
  {
    id: 38,
    name: "QIAGEN N.V.",
    mgstar: "https://www.morningstar.com/stocks/xnys/qgen/valuation",
  },
  {
    id: 39,
    name: "KONINKLIJKE DSM NV",
    mgstar: "https://www.morningstar.com/stocks/pinx/kdskf/valuation",
  },
  {
    id: 40,
    name: "INGENICO",
    mgstar: "https://www.morningstar.com/stocks/pinx/ingiy/valuation",
  },
  {
    id: 41,
    name: "EDF",
    mgstar: "https://www.morningstar.com/stocks/xpar/edf/valuation",
  },
  // {
  //   id: 42,
  //   name: "GROUPE EUROTUNNEL SA - REGR",
  //   mgstar: "",
  // },
  {
    id: 43,
    name: "UNIPER",
    mgstar: "https://www.morningstar.com/stocks/grey/unprf/valuation",
  },
  {
    id: 44,
    name: "AMS AG",
    mgstar: "https://www.morningstar.com/stocks/pinx/aukuf/valuation",
  },
  {
    id: 45,
    name: "GRUBHUB INC",
    mgstar: "https://www.morningstar.com/stocks/xnys/grub/valuation",
  },
  {
    id: 46,
    name: "SUEZ ENVIRONNEMENT CO",
    mgstar: "https://www.morningstar.com/stocks/pinx/szevf/valuation",
  },
  {
    id: 47,
    name: "PRUDENTIAL PLC",
    mgstar: "https://www.morningstar.com/stocks/pinx/pukpf/valuation",
  },
  {
    id: 48,
    name: "VINCI SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/vcisf/valuation",
  },
  {
    id: 49,
    name: "CAIXA BANK - EX CRITERIA CAIXACORP SA",
    mgstar: "https://www.morningstar.com/stocks/xmad/cabk/valuation",
  },
  {
    id: 50,
    name: "CONSTELLIUM NV",
    mgstar: "https://www.morningstar.com/stocks/xnys/cstm/valuation",
  },
  {
    id: 51,
    name: "CERVED INFO SOL",
    mgstar: "https://www.morningstar.com/stocks/grey/cvmty/valuation",
  },
  {
    id: 52,
    name: "PLAYTECH LTD",
    mgstar: "https://www.morningstar.com/stocks/grey/pytcf/valuation",
  },
  {
    id: 53,
    name: "M&G PRUDENTIAL PLC",
    mgstar: "https://www.morningstar.com/stocks/grey/mngpf/valuation",
  },
  {
    id: 54,
    name: "ORANGE BELGIUM",
    mgstar: "https://www.morningstar.com/stocks/grey/mbsry/valuation",
  },
  {
    id: 55,
    name: "TRATON BR",
    mgstar: "https://www.morningstar.com/stocks/xsto/8tra/valuation",
  },
  {
    id: 56,
    name: "ORANGE",
    mgstar: "https://www.morningstar.com/stocks/pinx/fnctf/valuation",
  },
  {
    id: 57,
    name: "AMADEUS",
    mgstar: "https://www.morningstar.com/stocks/pinx/amadf/valuation",
  },
  {
    id: 58,
    name: "AUTO TRADER GROUP",
    mgstar: "https://www.morningstar.com/stocks/grey/atdrf/valuation",
  },
  {
    id: 59,
    name: "ASOS",
    mgstar: "https://www.morningstar.com/stocks/pinx/asomf/valuation",
  },
  {
    id: 60,
    name: "ANIMA HOLDING SP",
    mgstar: "https://www.morningstar.com/stocks/grey/annmf/valuation",
  },
  {
    id: 93,
    name: "CAP GEMINI",
    mgstar: "https://www.morningstar.com/stocks/pinx/capmf/valuation",
  },
  {
    id: 94,
    name: "ATLANTIA",
    mgstar: "https://www.morningstar.com/stocks/pinx/atasf/valuation",
  },
  {
    id: 96,
    name: "TELEPERFORMANCE",
    mgstar: "https://www.morningstar.com/stocks/pinx/tlpff/valuation",
  },
  {
    id: 97,
    name: "ILIAD SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/iliaf/valuation",
  },
  {
    id: 98,
    name: "RENAULT SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/rnsdf/valuation",
  },
  {
    id: 99,
    name: "ELIS FP",
    mgstar: "https://www.morningstar.com/stocks/grey/elssf/valuation",
  },
  {
    id: 100,
    name: "LAGARDERE S.C.A.",
    mgstar: "https://www.morningstar.com/stocks/pinx/lgddf/valuation",
  },
  {
    id: 101,
    name: "VICAT SA",
    mgstar: "https://www.morningstar.com/stocks/grey/vvcty/valuation",
  },
  {
    id: 102,
    name: "MERSEN",
    mgstar: "https://www.morningstar.com/stocks/pinx/cblny/valuation",
  },
  {
    id: 103,
    name: "REXEL SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/rxlsf/valuation",
  },
  {
    id: 104,
    name: "VERALLIA",
    mgstar: "https://www.morningstar.com/stocks/xwbo/vrla/valuation",
  },
  {
    id: 105,
    name: "CELLNEX",
    mgstar: "https://www.morningstar.com/stocks/grey/clnxf/valuation",
  },
  {
    id: 106,
    name: "EVOLUTION GAMING GROUP",
    mgstar: "https://www.morningstar.com/stocks/pinx/evggf/valuation",
  },
  {
    id: 107,
    name: "ASM INTERNATIONAL NV",
    mgstar: "https://www.morningstar.com/stocks/pinx/asmxf/valuation",
  },
  {
    id: 108,
    name: "SIG COMBIBLOC GRP N",
    mgstar: "https://www.morningstar.com/stocks/xfra/1yqa/valuation",
  },
  {
    id: 109,
    name: "POLYMETAL PLC",
    mgstar: "https://www.morningstar.com/stocks/grey/poyyf/valuation",
  },
  {
    id: 110,
    name: "PSP SWISS PROPERTY AG-REG",
    mgstar: "https://www.morningstar.com/stocks/pinx/pspsf/valuation",
  },
  {
    id: 111,
    name: "GALENICA SANTE",
    mgstar: "https://www.morningstar.com/stocks/grey/gllny/valuation",
  },
  {
    id: 112,
    name: "HOLMEN AB-B SHARES",
    mgstar: "https://www.morningstar.com/stocks/grey/hlhly/valuation",
  },
  {
    id: 113,
    name: "BALDER",
    mgstar: "https://www.morningstar.com/stocks/xsto/bald%20b/valuation",
  },
  {
    id: 114,
    name: "SCHNEIDER ELECTRIC SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/sbgsf/valuation",
  },
  {
    id: 115,
    name: "ASML HOLDING NV",
    mgstar: "https://www.morningstar.com/stocks/pinx/asmlf/valuation",
  },
  {
    id: 116,
    name: "SARTORIUS PREF",
    mgstar: "https://www.morningstar.com/stocks/pinx/soagy/valuation",
  },
  {
    id: 117,
    name: "ELISA OYJ",
    mgstar: "https://www.morningstar.com/stocks/grey/elmuy/valuation",
  },
  {
    id: 118,
    name: "NEXI SPA",
    mgstar: "https://www.morningstar.com/stocks/pinx/nexpf/valuation",
  },
  {
    id: 119,
    name: "FLUTTER ENTERTAINMENT",
    mgstar: "https://www.morningstar.com/stocks/grey/pdypf/valuation",
  },
  {
    id: 120,
    name: "PENNON GROUP PLC",
    mgstar: "https://www.morningstar.com/stocks/pinx/pegrf/valuation",
  },
  {
    id: 121,
    name: "BECHTLE AG",
    mgstar: "https://www.morningstar.com/stocks/grey/becty/valuation",
  },
  {
    id: 122,
    name: "DELIVERY HERO AG",
    mgstar: "https://www.morningstar.com/stocks/pinx/dlvhf/valuation",
  },
  {
    id: 123,
    name: "HANNOVER RUECKVERSICHERU-SE",
    mgstar: "https://www.morningstar.com/stocks/xnys/thg/valuation",
  },
  {
    id: 124,
    name: "GALAPAGOS",
    mgstar: "https://www.morningstar.com/stocks/grey/glpgf/valuation",
  },
  {
    id: 125,
    name: "GENMAB A/S",
    mgstar: "https://www.morningstar.com/stocks/pinx/gnmsf/valuation",
  },
  {
    id: 126,
    name: "SCOUT24 AG",
    mgstar: "https://www.morningstar.com/stocks/pinx/scotf/valuation",
  },
  {
    id: 127,
    name: "LONDON STOCK EXCHANGE GROUP",
    mgstar: "https://www.morningstar.com/stocks/pinx/ldnxf/valuation",
  },
  {
    id: 128,
    name: "TELE2 AB-B SHS",
    mgstar: "https://www.morningstar.com/stocks/xsto/tel2%20b/valuation",
  },
  {
    id: 129,
    name: "BE SEMICONDUCTOR INDUSTRIES",
    mgstar: "https://www.morningstar.com/stocks/grey/besvf/valuation",
  },
  {
    id: 130,
    name: "ENEL SPA",
    mgstar: "https://www.morningstar.com/stocks/pinx/esocf/valuation",
  },
  {
    id: 131,
    name: "GJENSIDIGE FORSIKRING ASA",
    mgstar: "https://www.morningstar.com/stocks/grey/gjnsf/valuation",
  },
  {
    id: 132,
    name: "LVMH MOET HENNESSY LOUIS VUI",
    mgstar: "https://www.morningstar.com/stocks/pinx/lvmhf/valuation",
  },
  {
    id: 133,
    name: "HOWDEN JOINERY GROUP PLC",
    mgstar: "https://www.morningstar.com/stocks/pinx/hwdjf/valuation",
  },
  {
    id: 134,
    name: "EDP-ENERGIAS DE PORTUGAL SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/edpfy/valuation",
  },
  {
    id: 135,
    name: "ALTICE NV - A",
    mgstar: "https://www.morningstar.com/stocks/xnys/atus/valuation",
  },
  {
    id: 136,
    name: "AVEVA GROUP PLC",
    mgstar: "https://www.morningstar.com/stocks/pinx/avevf/valuation",
  },
  {
    id: 137,
    name: "LEGRAND SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/lgrvf/valuation",
  },
  {
    id: 138,
    name: "SWISS PRIME",
    mgstar: "https://www.morningstar.com/stocks/pinx/swprf/valuation",
  },
  {
    id: 139,
    name: "DSV A/S",
    mgstar: "https://www.morningstar.com/stocks/pinx/dsdvy/valuation",
  },
  {
    id: 140,
    name: "SEGRO PLC",
    mgstar: "https://www.morningstar.com/stocks/pinx/segxf/valuation",
  },
  {
    id: 141,
    name: "ORSTED A/S",
    mgstar: "https://www.morningstar.com/stocks/pinx/dogef/valuation",
  },
  {
    id: 142,
    name: "IDORSIA LTD",
    mgstar: "https://www.morningstar.com/stocks/pinx/idrsf/valuation",
  },
  {
    id: 143,
    name: "CASTELLUM AB",
    mgstar: "https://www.morningstar.com/stocks/pinx/onov/valuation",
  },
  {
    id: 144,
    name: "UNITE GROUP PLC",
    mgstar: "https://www.morningstar.com/stocks/grey/utgpf/valuation",
  },
  {
    id: 145,
    name: "AMPLIFON SPA",
    mgstar: "https://www.morningstar.com/stocks/grey/amfpf/valuation",
  },
  {
    id: 146,
    name: "FERRARI",
    mgstar: "https://www.morningstar.com/stocks/xnys/race/valuation",
  },
  {
    id: 147,
    name: "ICADE",
    mgstar: "https://www.morningstar.com/stocks/pinx/cdmgf/valuation",
  },
  {
    id: 148,
    name: "PARTNERS GROUP HOLDING AG",
    mgstar: "https://www.morningstar.com/stocks/pinx/pgphf/valuation",
  },
  {
    id: 149,
    name: "NIBE INDUSTRIER AB B SH",
    mgstar: "https://www.morningstar.com/stocks/pinx/ndrbf/valuation",
  },
  {
    id: 150,
    name: "STMICROELECTRONICS ITALY",
    mgstar: "https://www.morningstar.com/stocks/pinx/stmef/valuation",
  },
  {
    id: 151,
    name: "HERA SPA",
    mgstar: "https://www.morningstar.com/stocks/grey/hrspy/valuation",
  },
  {
    id: 152,
    name: "BAKKAFROST",
    mgstar: "https://www.morningstar.com/stocks/pinx/bkfkf/valuation",
  },
  {
    id: 153,
    name: "PERSIMMON PLC",
    mgstar: "https://www.morningstar.com/stocks/pinx/psmmf/valuation",
  },
  {
    id: 154,
    name: "SAMHALL NORD-B RG",
    mgstar: "https://www.morningstar.com/stocks/xsto/sbb%20b/valuation",
  },
  {
    id: 155,
    name: "NEMETSCHEK",
    mgstar: "https://www.morningstar.com/stocks/grey/nemtf/valuation",
  },
  {
    id: 156,
    name: "ZURICH INSURANCE GROUP AG",
    mgstar: "https://www.morningstar.com/stocks/pinx/zfsvf/valuation",
  },
  {
    id: 157,
    name: "INMOBILIARIA COLONIAL SA",
    mgstar: "https://www.morningstar.com/stocks/grey/imqcf/valuation",
  },
  {
    id: 158,
    name: "SOPRA GROUP",
    mgstar: "https://www.morningstar.com/stocks/grey/spsaf/valuation",
  },
  {
    id: 159,
    name: "NEXANS SA",
    mgstar: "https://www.morningstar.com/stocks/pinx/nxprf/valuation",
  },
  {
    id: 160,
    name: "VEOLIA ENVIRONNEMENT",
    mgstar: "https://www.morningstar.com/stocks/pinx/veoey/valuation",
  },
  {
    id: 161,
    name: "INTERMEDIATE CAPITAL GROUP",
    mgstar: "https://www.morningstar.com/stocks/pinx/icguf/valuation",
  },
  // { //ni
  //   id: 162,
  //   name: "JM AB",
  //   mgstar: "",
  // },
  {
    id: 163,
    name: "VISTRY GROUP",
    mgstar: "https://www.morningstar.com/stocks/grey/bvhmy/valuation",
  },
  {
    id: 164,
    name: "REDROW PLC",
    mgstar: "https://www.morningstar.com/stocks/xfra/1ho1/valuation",
  },
  {
    id: 166,
    name: "LUNDBERGS AB-B SHS",
    mgstar: "https://www.morningstar.com/stocks/grey/lbguf/valuation",
  },
  {
    id: 167,
    name: "PUBLICIS",
    mgstar: "https://www.morningstar.com/stocks/pinx/pgpef/valuation",
  },
  {
    id: 168,
    name: "EUROPCAR MOBILITY",
    mgstar: "https://www.morningstar.com/stocks/xber/e7cd/valuation",
  },
  {
    id: 169,
    name: "INFORMA",
    mgstar: "https://www.morningstar.com/stocks/grey/ifpjf/valuation",
  },
  {
    id: 170,
    name: "SCOR",
    mgstar: "https://www.morningstar.com/stocks/xnas/scor/valuation",
  },
  {
    id: 171,
    name: "BOOKING HOLDINGS",
    mgstar: "https://www.morningstar.com/stocks/xnas/bkng/valuation",
  },
  {
    id: 172,
    name: "JUST EAT TAKEAWAY",
    mgstar: "https://www.morningstar.com/stocks/pinx/tkayf/valuation",
  },
  {
    id: 173,
    name: "SOCIETE GENERALE",
    mgstar: "https://www.morningstar.com/stocks/pinx/scglf/valuation",
  },
  {
    id: 174,
    name: "HELLOFRESH",
    mgstar: "https://www.morningstar.com/stocks/grey/hlfff/valuation",
  },
  {
    id: 175,
    name: "HISCOX",
    mgstar: "https://www.morningstar.com/stocks/grey/hcxlf/valuation",
  },
  {
    id: 176,
    name: "DUFRY",
    mgstar: "https://www.morningstar.com/stocks/pinx/dufry/valuation",
  },
  {
    id: 177,
    name: "ARCELOR MITTAL",
    mgstar: "https://www.morningstar.com/stocks/pinx/amsyf/valuation",
  },
  {
    id: 178,
    name: "INFINEON TECHNOLOGIES",
    mgstar: "https://www.morningstar.com/stocks/pinx/ifnnf/valuation",
  },
  {
    id: 179,
    name: "SIKA AG",
    mgstar: "https://www.morningstar.com/stocks/pinx/sxyay/valuation",
  },
  {
    id: 180,
    name: "GCI LIBERTY INC",
    mgstar: "https://www.morningstar.com/stocks/xnas/gliba/valuation",
  },
  {
    id: 181,
    name: "AMBAC FINANCIAL GROUP INC",
    mgstar: "https://www.morningstar.com/stocks/xnys/ambc/valuation",
  },
  {
    id: 182,
    name: "SOLOCAL GROUP SA",
    mgstar: "https://www.morningstar.com/stocks/grey/sllgf/valuation",
  },
  {
    id: 183,
    name: "IPSOS",
    mgstar: "https://www.morningstar.com/stocks/grey/ipsof/valuation",
  },
  {
    id: 184,
    name: "WORLDLINE",
    mgstar: "https://www.morningstar.com/stocks/xpar/wln/valuation",
  },
  {
    id: 185,
    name: "FIAT",
    mgstar: "https://www.morningstar.com/stocks/xmil/fca/valuation",
  },
  {
    id: 186,
    name: "TIFFANY",
    mgstar: "https://www.morningstar.com/stocks/xnys/tif/valuation",
  },
  {
    id: 187,
    name: "RWE",
    mgstar: "https://www.morningstar.com/stocks/xetr/rwe/valuation",
  },
  {
    id: 188,
    name: "INDRA SISTEMAS",
    mgstar: "https://www.morningstar.com/stocks/xfra/ida/valuation",
  },
  {
    id: 189,
    name: "ALIBABA",
    mgstar: "https://www.morningstar.com/stocks/xnys/baba/valuation",
  },
  {
    id: 190,
    name: "PRYSMIAN",
    mgstar: "https://www.morningstar.com/stocks/xmil/pry/valuation",
  },
  {
    id: 191,
    name: "COFINIMMO",
    mgstar: "https://www.morningstar.com/stocks/xfra/cof/valuation",
  },
  {
    id: 192,
    name: "LAFARGEHOLCIM",
    mgstar: "https://www.morningstar.com/stocks/xswx/lhn/valuation",
  },
  {
    id: 193,
    name: "KORIAN",
    mgstar: "https://www.morningstar.com/stocks/xpar/kori/valuation",
  },
  {
    id: 194,
    name: "STEF",
    mgstar: "https://www.morningstar.com/stocks/xpar/stf/valuation",
  },
  {
    id: 195,
    name: "IPSEN",
    mgstar: "https://www.morningstar.com/stocks/xpar/ipn/valuation",
  },
  {
    id: 196,
    name: "MICHELIN",
    mgstar: "https://www.morningstar.com/stocks/xpar/ml/valuation",
  },
  {
    id: 197,
    name: "EIFFAGE",
    mgstar: "https://www.morningstar.com/stocks/xpar/fgr/valuation",
  },
  {
    id: 198,
    name: "BRENNTAG",
    mgstar: "https://www.morningstar.com/stocks/xetr/bnr/valuation",
  },
  {
    id: 199,
    name: "VOLKSWAGEN",
    mgstar: "https://www.morningstar.com/stocks/xetr/vow3/valuation",
  },
  {
    id: 200,
    name: "DEUTSCHE WOHNEN",
    mgstar: "https://www.morningstar.com/stocks/xetr/dwni/valuation",
  },
  {
    id: 201,
    name: "GN STORE NORD",
    mgstar: "https://www.morningstar.com/stocks/xcse/gn/valuation",
  },
  {
    id: 202,
    name: "EVONIK INDUSTRIES",
    mgstar: "https://www.morningstar.com/stocks/xetr/evk/valuation",
  },
  {
    id: 203,
    name: "UBISOFT",
    mgstar: "https://www.morningstar.com/stocks/xpar/ubi/valuation",
  },
  {
    id: 204,
    name: "TECHNIPFMC",
    mgstar: "https://www.morningstar.com/stocks/xpar/fti/valuation",
  },
  {
    id: 205,
    name: "CARREFOUR",
    mgstar: "https://www.morningstar.com/stocks/xpar/ca/valuation",
  },
  {
    id: 206,
    name: "NV BEKAERT",
    mgstar: "https://www.morningstar.com/stocks/xbru/bekb/valuation",
  },
  {
    id: 207,
    name: "AIR FRANCE KLM",
    mgstar: "https://www.morningstar.com/stocks/xpar/af/valuation",
  },
  {
    id: 208,
    name: "GRANDVISION",
    mgstar: "https://www.morningstar.com/stocks/chix/gvnva/valuation",
  },
  {
    id: 209,
    name: "COVIVIO",
    mgstar: "https://www.morningstar.com/stocks/xpar/cov/valuation",
  },
  {
    id: 210,
    name: "INTERTRUST",
    mgstar: "https://www.morningstar.com/stocks/xams/inter/valuation",
  },
  {
    id: 211,
    name: "AKKA TECHNOLOGIES",
    mgstar: "https://www.morningstar.com/stocks/xpar/aka/valuation",
  },
  {
    id: 212,
    name: "APERAM",
    mgstar: "https://www.morningstar.com/stocks/xams/apam/valuation",
  },
  {
    id: 213,
    name: "AEROPORTS DE PARIS",
    mgstar: "https://www.morningstar.com/stocks/xpar/adp/valuation",
  },
  {
    id: 214,
    name: "EQT AB",
    mgstar: "https://www.morningstar.com/stocks/xsto/eqt/valuation",
  },
  {
    id: 215,
    name: "NETENT AB",
    mgstar: "https://www.morningstar.com/stocks/xsto/net%20b/valuation",
  },
  {
    id: 216,
    name: "SWEDISH MATCH",
    mgstar: "https://www.morningstar.com/stocks/xsto/swma/valuation",
  },
  {
    id: 217,
    name: "TELECOM ITALIA",
    mgstar: "https://www.morningstar.com/stocks/xmil/tit/valuation",
  },
  {
    id: 218,
    name: "OTIS WORLDWIDE CORP",
    mgstar: "https://www.morningstar.com/stocks/xnys/otis/valuation",
  },
  {
    id: 219,
    name: "ELIOR GROUP",
    mgstar: "https://www.morningstar.com/stocks/xpar/elior/valuation",
  },
  {
    id: 220,
    name: "TEAMVIEWER",
    mgstar: "https://www.morningstar.com/stocks/xfra/tmv/valuation",
  },
  {
    id: 221,
    name: "CARLSBERG",
    mgstar: "https://www.morningstar.com/stocks/xcse/carl%20b/valuation",
  },
  {
    id: 222,
    name: "ESSILORLUXOTTICA",
    mgstar: "https://www.morningstar.com/stocks/xpar/el/valuation",
  },
  {
    id: 223,
    name: "VONOVIA",
    mgstar: "https://www.morningstar.com/stocks/xfra/vna/valuation",
  },
  {
    id: 224,
    name: "ADYEN",
    mgstar: "https://www.morningstar.com/stocks/xams/adyen/valuation",
  },
  {
    id: 225,
    name: "RAYTHEON TECHNOLOGIES CORP",
    mgstar: "https://www.morningstar.com/stocks/xnys/rtx/valuation",
  },
  {
    id: 226,
    name: "DISTRIBUIDORA INTERNACIONAL DE ALIMENTACION (DIA)",
    mgstar: "https://www.morningstar.com/stocks/xfra/di6/valuation",
  },
  {
    id: 227,
    name: "LOGITECH INTERNATIONAL",
    mgstar: "https://www.morningstar.com/stocks/xswx/logn/valuation",
  },
  {
    id: 228,
    name: "CENTAMIN",
    mgstar: "https://www.morningstar.com/stocks/xlon/cey/valuation",
  },
  {
    id: 229,
    name: "ING GROEP",
    mgstar: "https://www.morningstar.com/stocks/xams/inga/valuation",
  },
  {
    id: 230,
    name: "ZALANDO",
    mgstar: "https://www.morningstar.com/stocks/xfra/zal/valuation",
  },
  {
    id: 231,
    name: "FINECOBANK BANCA FINECO",
    mgstar: "https://www.morningstar.com/stocks/xmil/fbk/valuation",
  },
  {
    id: 232,
    name: "PANDORA",
    mgstar: "https://www.morningstar.com/stocks/xcse/pndora/valuation",
  },
  {
    id: 233,
    name: "ATLAS COPCO",
    mgstar: "https://www.morningstar.com/stocks/xsto/atco%20a/valuation",
  },
  {
    id: 234,
    name: "GERRESHEIMER",
    mgstar: "https://www.morningstar.com/stocks/xetr/gxi/valuation",
  },
  {
    id: 235,
    name: "EURONEXT",
    mgstar: "https://www.morningstar.com/stocks/xpar/enx/valuation",
  },
  {
    id: 236,
    name: "VAT GROUP",
    mgstar: "https://www.morningstar.com/stocks/xswx/vacn/valuation",
  },
  {
    id: 237,
    name: "SUNRISE COMMUNICATIONS",
    mgstar: "https://www.morningstar.com/stocks/xswx/srcg/valuation",
  },
  {
    id: 238,
    name: "BIOMERIEUX",
    mgstar: "https://www.morningstar.com/stocks/xpar/bim/valuation",
  },
  {
    id: 239,
    name: "BANCA MONTE DEI PASCHI DI SIENA",
    mgstar: "https://www.morningstar.com/stocks/xmil/bmps/valuation",
  },
  {
    id: 240,
    name: "DIASORIN",
    mgstar: "https://www.morningstar.com/stocks/xmil/dia/valuation",
  },
  {
    id: 241,
    name: "AMBU",
    mgstar: "https://www.morningstar.com/stocks/xcse/ambu%20b/valuation",
  },
  {
    id: 242,
    name: "DEUTSCHE BANK",
    mgstar: "https://www.morningstar.com/stocks/xfra/dbk/valuation",
  },
  {
    id: 243,
    name: "UNITED INTERNET",
    mgstar: "https://www.morningstar.com/stocks/xber/utdi/valuation",
  },
  {
    id: 244,
    name: "PLASTIC OMNIUM",
    mgstar: "https://www.morningstar.com/stocks/xpar/pom/valuation",
  },
  {
    id: 245,
    name: "BOLLORE",
    mgstar: "https://www.morningstar.com/stocks/xpar/bol/valuation",
  },
  {
    id: 246,
    name: "AURUBIS",
    mgstar: "https://www.morningstar.com/stocks/xetr/nda/valuation",
  },
  {
    id: 247,
    name: "RENTOKIL INITIAL",
    mgstar: "https://www.morningstar.com/stocks/xlon/rto/valuation",
  },
  {
    id: 248,
    name: "FLOW TRADERS",
    mgstar: "https://www.morningstar.com/stocks/xams/flow/valuation",
  },
  {
    id: 249,
    name: "LONZA GROUP",
    mgstar: "https://www.morningstar.com/stocks/xswx/lonn/valuation",
  },
  {
    id: 250,
    name: "ONTEX GROUP",
    mgstar: "https://www.morningstar.com/stocks/xbru/ontex/valuation",
  },
  {
    id: 251,
    name: "PLUS500",
    mgstar: "https://www.morningstar.com/stocks/xlon/plus/valuation",
  },
  {
    id: 252,
    name: "KBR INC",
    mgstar: "https://www.morningstar.com/stocks/xnys/kbr/valuation",
  },
  {
    id: 253,
    name: "EUROFINS SCIENTIFIC",
    mgstar: "https://www.morningstar.com/stocks/xpar/erf/valuation",
  },
  // { id: 254, name: "APPLUS SERVICES", mgstar: "" },
  {
    id: 255,
    name: "WRIGHT MEDICAL GROUP",
    mgstar: "https://www.morningstar.com/stocks/xnas/wmgi/valuation",
  },
  {
    id: 256,
    name: "SVENSKA CELLULOSA SCA",
    mgstar: "https://www.morningstar.com/stocks/xsto/sca%20a/valuation",
  },
  {
    id: 257,
    name: "SOFTWARE",
    mgstar: "https://www.morningstar.com/stocks/chix/sowd/valuation",
  },
  {
    id: 258,
    name: "HERMES INTERNATIONAL",
    mgstar: "https://www.morningstar.com/stocks/xpar/rms/valuation",
  },
  {
    id: 259,
    name: "IG GROUP HOLDINGS",
    mgstar: "https://www.morningstar.com/stocks/xlon/igg/valuation",
  },
  {
    id: 260,
    name: "POSTNL",
    mgstar: "https://www.morningstar.com/stocks/xams/pnl/valuation",
  },
  {
    id: 261,
    name: "EMS CHEMIE HOLDING",
    mgstar: "https://www.morningstar.com/stocks/xswx/emsn/valuation",
  },
  {
    id: 262,
    name: "METSA BOARD",
    mgstar: "https://www.morningstar.com/stocks/xhel/metsa/valuation",
  },
  {
    id: 263,
    name: "COLOPLAST",
    mgstar: "https://www.morningstar.com/stocks/xcse/colo%20b/valuation",
  },
  {
    id: 264,
    name: "B&M EUROPEAN VALUE RETAIL",
    mgstar: "https://www.morningstar.com/stocks/xlon/bme/valuation",
  },
  {
    id: 265,
    name: "SILTRONIC",
    mgstar: "https://www.morningstar.com/stocks/xswx/waf/valuation",
  },
  {
    id: 266,
    name: "SACYR",
    mgstar: "https://www.morningstar.com/stocks/xmad/scyr/valuation",
  },
  {
    id: 267,
    name: "KLEPIERRE",
    mgstar: "https://www.morningstar.com/stocks/xpar/li/quote",
  },
  {
    id: 268,
    name: "BOOHOO GROUP",
    mgstar: "https://www.morningstar.com/stocks/xlon/boo/valuation",
  },
  {
    id: 269,
    name: "NESTE OIL CORPORATION",
    mgstar: "https://www.morningstar.com/stocks/xhel/neste/valuation",
  },
  {
    id: 270,
    name: "TEMENOS",
    mgstar: "https://www.morningstar.com/stocks/xswx/temn/valuation",
  },
  {
    id: 271,
    name: "CASINO GUICHARD PERRACHON",
    mgstar: "https://www.morningstar.com/stocks/xpar/co/valuation",
  },
  {
    id: 272,
    name: "TELEVISION FRANCAISE 1 (TF1)",
    mgstar: "https://www.morningstar.com/stocks/xpar/tfi/valuation",
  },
  {
    id: 273,
    name: "EQUINOR",
    mgstar: "https://www.morningstar.com/stocks/xosl/eqnr/valuation",
  },
  {
    id: 274,
    name: "KONE OYJ",
    mgstar: "https://www.morningstar.com/stocks/xhel/knebv/valuation",
  },
  {
    id: 275,
    name: "L'OREAL",
    mgstar: "https://www.morningstar.com/stocks/xpar/or/valuation",
  },
  {
    id: 276,
    name: "BANCA GENERALI",
    mgstar: "https://www.morningstar.com/stocks/xmil/bgn/valuation",
  },
  {
    id: 277,
    name: "TRAINLINE",
    mgstar: "https://www.morningstar.com/stocks/xlon/trn/valuation",
  },
  {
    id: 278,
    name: "VOYA FINANCIAL",
    mgstar: "https://www.morningstar.com/stocks/xnys/voya/valuation",
  },
  {
    id: 279,
    name: "AIR LIQUIDE",
    mgstar: "https://www.morningstar.com/stocks/xpar/ai/valuation",
  },
  {
    id: 280,
    name: "WOLTERS KLUWER",
    mgstar: "https://www.morningstar.com/stocks/xams/wkl/valuation",
  },
  {
    id: 281,
    name: "OUTOKUMPU",
    mgstar: "https://www.morningstar.com/stocks/xhel/out1v/valuation",
  },
  {
    id: 282,
    name: "TECAN GROUP",
    mgstar: "https://www.morningstar.com/stocks/xswx/tecn/valuation",
  },
  {
    id: 283,
    name: "KNORR BREMSE",
    mgstar: "https://www.morningstar.com/stocks/xetr/kbx/valuation",
  },
  {
    id: 284,
    name: "CEMBRA MONEY BANK",
    mgstar: "https://www.morningstar.com/stocks/xswx/cmbn/valuation",
  },
  {
    id: 285,
    name: "LUNDIN ENERGY",
    mgstar: "https://www.morningstar.com/stocks/xsto/lune/valuation",
  },
  {
    id: 286,
    name: "CHOCOLADEFABRIKEN LINDT & SPRUENGLI",
    mgstar: "https://www.morningstar.com/stocks/xswx/lisp/valuation",
  },
  {
    id: 287,
    name: "NORDIC ENTERTAINMENT GROUP",
    mgstar: "https://www.morningstar.com/stocks/xsto/nent%20a/valuation",
  },
  {
    id: 288,
    name: "SHOP APOTHEKE EUROPE",
    mgstar: "https://www.morningstar.com/stocks/xwbo/shop/valuation",
  },
  {
    id: 289,
    name: "VISCOFAN",
    mgstar: "https://www.morningstar.com/stocks/chix/vise/valuation",
  },
  {
    id: 290,
    name: "RECKITT BENCKISER GROUP",
    mgstar: "https://www.morningstar.com/stocks/xlon/rb./valuation",
  },
  {
    id: 291,
    name: "IMCD NV",
    mgstar: "https://www.morningstar.com/stocks/xams/imcd/valuation",
  },
  {
    id: 292,
    name: "DOMETIC GROUP AB",
    mgstar: "https://www.morningstar.com/stocks/xsto/dom/valuation",
  },
  {
    id: 293,
    name: "KESKO OYJ",
    mgstar: "https://www.morningstar.com/stocks/xhel/keskoa/valuation",
  },
  {
    id: 294,
    name: "PEUGEOT",
    mgstar: "https://www.morningstar.com/stocks/xpar/ug/valuation",
  },
  {
    id: 295,
    name: "ALLIANZ SE",
    mgstar: "https://www.morningstar.com/stocks/xetr/alv/valuation",
  },
  {
    id: 296,
    name: "FORTUM",
    mgstar: "https://www.morningstar.com/stocks/xhel/fortum/valuation",
  },
  {
    id: 297,
    name: "E.ON SE",
    mgstar: "https://www.morningstar.com/stocks/xetr/eoan/valuation",
  },
  {
    id: 298,
    name: "BASF SE",
    mgstar: "https://www.morningstar.com/stocks/xetr/bas/valuation",
  },
  {
    id: 299,
    name: "DEUTSCHE TELEKOM AG",
    mgstar: "https://www.morningstar.com/stocks/xfra/dte/valuation",
  },
  {
    id: 300,
    name: "CONTINENTAL AG",
    mgstar: "https://www.morningstar.com/stocks/xetr/con/valuation",
  },
  {
    id: 301,
    name: "SGS SA",
    mgstar: "https://www.morningstar.com/stocks/xswx/sgsn/valuation",
  },
  {
    id: 302,
    name: "INTERNATIONAL BUSINESS MACHINES CORP (IBM)",
    mgstar: "https://www.morningstar.com/stocks/xnys/ibm/valuation",
  },
  {
    id: 303,
    name: "KERING SA",
    mgstar: "https://www.morningstar.com/stocks/xpar/ker/valuation",
  },
  {
    id: 304,
    name: "GLAXOSMITHKLINE PLC",
    mgstar: "https://www.morningstar.com/stocks/xlon/gsk/valuation",
  },
  {
    id: 306,
    name: "TELIA COMPANY",
    mgstar: "https://www.morningstar.com/stocks/xsto/telia/valuation",
  },
  {
    id: 307,
    name: "ROLLS-ROYCE HOLDINGS",
    mgstar: "https://www.morningstar.com/stocks/xlon/rr./valuation",
  },
  {
    id: 308,
    name: "SCHLUMBERGER",
    mgstar: "https://www.morningstar.com/stocks/xnys/slb/valuation",
  },
  {
    id: 309,
    name: "NOVARTIS",
    mgstar: "https://www.morningstar.com/stocks/xswx/novn/valuation",
  },
  {
    id: 310,
    name: "NOVO NORDISK",
    mgstar: "https://www.morningstar.com/stocks/xcse/novo%20b/valuation",
  },
  {
    id: 311,
    name: "DASSAULT SYSTEMES",
    mgstar: "https://www.morningstar.com/stocks/xpar/dsy/valuation",
  },
  {
    id: 313,
    name: "SMCP",
    mgstar: "https://www.morningstar.com/stocks/xpar/smcp/valuation",
  },
  {
    id: 314,
    name: "PROXIMUS",
    mgstar: "https://www.morningstar.com/stocks/xbru/prox/valuation",
  },
{
    id: 315,
    name: "INTERTEK GROUP",
    mgstar: "https://www.morningstar.com/stocks/xfra/it1/valuation",
  },
{
    id: 316,
    name: "UNILEVER",
    mgstar: "https://www.morningstar.com/stocks/xams/una/valuation",
  },
{
    id: 317,
    name: "NESTLE",
    mgstar: "https://www.morningstar.com/stocks/xswx/nesn/valuation",
  },
  {
    id: 318,
    name: "PUMA",
    mgstar: "https://www.morningstar.com/stocks/xetr/pum/valuation",
  },
  {
    id: 319,
    name: "IBERDROLA",
    mgstar: "https://www.morningstar.com/stocks/xmad/ibe/valuation",
  },
  {
    id: 320,
    name: "OCADO",
    mgstar: "https://www.morningstar.com/stocks/xlon/ocdo/valuation",
  },
  {
    id: 321,
    name: "AA",
    mgstar: "https://www.morningstar.com/stocks/xlon/aa./valuation",
  },
  {
    id: 322,
    name: "INTESA SANPAOLO",
    mgstar: "https://www.morningstar.com/stocks/xmil/isp/valuation",
  },
  {
    id: 323,
    name: "HASTINGS GROUP",
    mgstar: "https://www.morningstar.com/stocks/xlon/hstg/valuation",
  },
  {
    id: 324,
    name: "COVESTRO",
    mgstar: "https://www.morningstar.com/stocks/xetr/1cov/valuation",
  },
  {
    id: 325,
    name: "SIEMENS",
    mgstar: "https://www.morningstar.com/stocks/xetr/sie/valuation",
  },
  {
    id: 326,
    name: "AVIVA",
    mgstar: "https://www.morningstar.com/stocks/xlon/av./valuation",
  },
  {
    id: 327,
    name: "SYMRISE",
    mgstar: "https://www.morningstar.com/stocks/xetr/sy1/valuation",
  },
];

module.exports = {
  params,
};
