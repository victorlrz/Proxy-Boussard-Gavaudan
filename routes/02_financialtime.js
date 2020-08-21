const router = require("express").Router();
const scrapersFinancial = require("../public/javascript/02_FinancialTime/scrapingft.js"); //Important pour importer le script dans routes/index.js

router.post("/financialtime", async (req, res) => {
  const financialTimeData = await scrapersFinancial.scrapersFinancialTime(
    req.body
  );
  res.send(financialTimeData);
});

module.exports = router;
