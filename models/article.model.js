const db = require("../config/db");
const { getAll, getById, update } = require("./user.model");

const ArticleModel = {
  create: async ({ titre, contenu, auteur_id, date_publication, statut }) => {
    const sql =
      "INSERT INTO articles (titre, contenu, auteur_id, date_publication, statut) VALUES (?, ?, ?, ?, ?)";
    const [result] = await db.query(sql, [
      titre,
      contenu,
      auteur_id,
      date_publication,
      statut,
    ]);
    return result;
  },

  getAll: async () => {
    const [result] = await db.query("SELECT * FROM articles");
    return result;
  },

  getById: async (id) => {
    const [result] = await db.query("SELECT * FROM articles WHERE id = ?", [
      id,
    ]);
    return result;
  },

  update: async (
    id,
    { titre, contenu, auteur_id, date_publication, statut }
  ) => {
    const sql =
      "UPDATE articles SET titre = ?, contenu = ?, auteur_id = ?, date_publication = ?, statut = ? WHERE id = ?";
    const [result] = await db.query(sql, [
      titre,
      contenu,
      auteur_id,
      date_publication,
      statut,
      id,
    ]);
    return result;
  },

  delete: async (id) => {
    const [result] = await db.query("DELETE FROM articles WHERE id = ?", [id]);
    return result;
  },
};

module.exports = ArticleModel;
