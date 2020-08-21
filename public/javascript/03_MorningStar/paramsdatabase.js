const fetch = require("node-fetch");
const db = require("../../../db");

const postScrapedFileIntoDatabase = async (values) => {
  try {
    const text = `INSERT INTO fundamentals(id, current_price_sales, current_price_earnings, current_price_cashflow, current_price_book, 
      current_price_forward_earnings, current_earning_yield, current_enterprise_value, current_enterprise_value_ebit, current_enterprise_value_ebitda, 
      stock_id, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`;
    const result = await db.query(text, values);
    const results = { results: result ? result.rows : null };
    return results;
  } catch (err) {
    console.error(err);
    res.send("Error in postScrapedFileIntoDatabase" + err);
  }
};

const updateScrapedFileIntoDatabase = async (values) => {
  try {
    const text = `UPDATE fundamentals SET (current_price_sales, current_price_earnings, current_price_cashflow, current_price_book,
      current_price_forward_earnings, current_earning_yield, current_enterprise_value, current_enterprise_value_ebit, current_enterprise_value_ebitda, updated_at
      ) = ($2, $3, $4, $5, $6, $7, $8, $9, $10, $11) WHERE stock_id = $1`;
    await db.query(text, values);
  } catch (err) {
    console.error(err);
    res.send("Error in updateScrapedFileIntoDatabase" + err);
  }
};

const getScrapedFileLastIdDatabase = async () => {
  try {
    const result = await db.query(
      "SELECT * FROM fundamentals ORDER BY id DESC LIMIT 1"
    );
    const results = { results: result ? result.rows : null };
    return results;
  } catch (err) {
    console.error(err);
    res.send("Error in getScrapedFileLastIdDatabase" + err);
  }
};

const getScrapedFileLastMorningStock = async (id) => {
  try {
    const text =
      "SELECT * FROM fundamentals WHERE stock_id = $1 ORDER BY id DESC LIMIT 1";
    const values = [id];
    const result = await db.query(text, values);
    const results = { results: result ? result.rows : null };
    return results;
  } catch (err) {
    console.error(err);
    res.send("Error in getScrapedFileLastIdStock" + err);
  }
};

const resetDataTable = async () => {
  try {
    const result = await db.query("DELETE FROM fundamentals ");
    const results = { results: result ? result.rows : null };
    return results;
  } catch (err) {
    console.error(err);
    res.send("Error in resetDataTable" + err);
  }
};

module.exports = {
  postScrapedFileIntoDatabase,
  getScrapedFileLastIdDatabase,
  getScrapedFileLastMorningStock,
  updateScrapedFileIntoDatabase,
  resetDataTable,
};
