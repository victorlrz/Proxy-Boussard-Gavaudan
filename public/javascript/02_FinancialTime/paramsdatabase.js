const fetch = require("node-fetch");
const db = require("../../../db");

const postArticlesIntoDatabase = async (values) => {
  try {
    const text =
      "INSERT INTO articles(id, date, title, url, stock_id, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const result = await db.query(text, values);
    const results = { results: result ? result.rows : null };
    return results;
  } catch (err) {
    console.error(err);
    res.send("Error in postScrapedFileIntoDatabase" + err);
  }
};

const getLastArticleIdDatabase = async () => {
  try {
    const result = await db.query(
      "SELECT * FROM articles ORDER BY id DESC LIMIT 1"
    );
    const results = { results: result ? result.rows : null };
    return results;
  } catch (err) {
    console.error(err);
    res.send("Error in getScrapedFileLastIdDatabase" + err);
  }
};

const getLastTitleStock = async (id) => {
  try {
    const text =
      "SELECT * FROM articles WHERE stock_id = $1 ORDER BY id DESC LIMIT 1";
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
    const result = await db.query("DELETE FROM articles ");
    const results = { results: result ? result.rows : null };
    return results;
  } catch (err) {
    console.error(err);
    res.send("Error in resetDataTable" + err);
  }
};

module.exports = {
  postArticlesIntoDatabase,
  getLastArticleIdDatabase,
  getLastTitleStock,
  resetDataTable,
};
