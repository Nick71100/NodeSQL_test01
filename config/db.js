const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: process.env.DB_MULTIPLESTATEMENTS === "true",
});

(async () => {
  try {
    const connexion = await db.getConnection();
    console.log("Connexion à MySQL réussie");
    connexion.release();
  } catch (error) {
    console.error("rreur de connexion à MySQL :", error.message);
  }
})();

module.exports = db;
