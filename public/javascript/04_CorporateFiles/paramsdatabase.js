const fetch = require("node-fetch");
const db = require("../../../db");

const postScrapedFileIntoDatabase = async (values) => {
  try {
    const text =
      "INSERT INTO scraped_files(id, date, stock_id, title, cloudinary, comment_link, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    const result = await db.query(text, values);
    const results = { results: result ? result.rows : null };
    return results;
  } catch (err) {
    console.error(err);
    res.send("Error in postScrapedFileIntoDatabase" + err);
  }
};

const getScrapedFileLastIdDatabase = async () => {
  try {
    const result = await db.query(
      "SELECT * FROM scraped_files ORDER BY id DESC LIMIT 1"
    );
    const results = { results: result ? result.rows : null };
    return results;
  } catch (err) {
    console.error(err);
    res.send("Error in getScrapedFileLastIdDatabase" + err);
  }
};

const getScrapedFileLastTitleStock = async (id) => {
  try {
    const text =
      "SELECT * FROM scraped_files WHERE stock_id = $1 ORDER BY id DESC LIMIT 1";
    const values = [id];
    const result = await db.query(text, values);
    const results = { results: result ? result.rows : null };
    return results;
  } catch (err) {
    console.error(err);
    res.send("Error in getScrapedFileLastIdStock" + err);
  }
};

module.exports = {
  postScrapedFileIntoDatabase,
  getScrapedFileLastIdDatabase,
  getScrapedFileLastTitleStock,
};
