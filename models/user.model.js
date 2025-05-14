const db = require("../config/db");

const UserModel = {
  create: async ({ nom, prenom, age, role, mail }) => {
    const sql =
      "INSERT INTO user (nom, prenom, age, role, mail) VALUES (?, ?, ?, ?, ?)";
    const [result] = await db.query(sql, [nom, prenom, age, role, mail]);
    return result;
  },

  getAll: async () => {
    const [result] = await db.query("SELECT * FROM user");
    return result;
  },

  getById: async (id) => {
    const [result] = await db.query("SELECT * FROM user WHERE id = ?", [id]);
    return result;
  },

  update: async (id, { nom, prenom, age, role, mail }) => {
    const sql =
      "UPDATE user SET nom = ?, prenom = ?, age = ?, role = ?, mail = ? WHERE id = ?";
    const [result] = await db.query(sql, [nom, prenom, age, role, mail, id]);
    return result;
  },

  delete: async (id) => {
    const [result] = await db.query("DELETE FROM user WHERE id = ?", [id]);
    return result;
  },
};

module.exports = UserModel;
