const router = require("express").Router();
const scrapersMorning = require("../public/javascript/03_MorningStar/scrapingstar.js");

// router.get("/morningstar", async (req, res) => {
//   await scrapersMorning.morningStarMain();
//   res.send("Updated data, check your database !");
// });

module.exports = router;
