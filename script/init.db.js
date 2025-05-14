const fs = require("fs");
const db = require("../config/db");

(async () => {
  try {
    const initSQL = fs.readFileSync("./sql/init.sql", "utf8");

    await db.query(initSQL);

    console.log("Base de données initialisée correctement ✔");
  } catch (err) {
    console.error("Erreur lors de l'initialisation :", err.message);
  } finally {
    await db.end();
  }
})();
