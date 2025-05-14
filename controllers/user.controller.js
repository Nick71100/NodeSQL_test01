const UserModel = require("../models/user.model");

exports.createUser = async (req, res) => {
  try {
    const { nom, prenom, age, role, mail } = req.body;
    const result = await UserModel.create({ nom, prenom, age, role, mail });
    res.status(201).json({ message: "Utilisateur créé", id: result.insertId });
  } catch (error) {
    console.error("Erreur création utilisateur :", error);
    res
      .status(500)
      .json({ error: "Erreur serveur lors de la création de l'utilisateur" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const user = await UserModel.getAll();
    res.status(200).json(user);
  } catch (error) {
    console.error("Erreur récupération utilisateurs :", error);
    res.status(500).json({
      error: "Erreur serveur lors de la récupération des utilisateurs",
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.getById(id);
    if (!user.length) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.status(200).json(user[0]);
  } catch (error) {
    console.error("Erreur récupération utilisateur :", error);
    res.status(500).json({
      error: "Erreur serveur lors de la récupération de l'utilisateur",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, prenom, age, role, mail } = req.body;
    const result = await UserModel.update(id, { nom, prenom, age, role, mail });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.status(200).json({ message: "Utilisateur mis à jour avec succès" });
  } catch (error) {
    console.error("Erreur mise à jour utilisateur :", error);
    res.status(500).json({
      error: "Erreur serveur lors de la mise à jour de l'utilisateur",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserModel.delete(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    console.error("Erreur suppression utilisateur :", error);
    res.status(500).json({
      error: "Erreur serveur lors de la suppression de l'utilisateur",
    });
  }
};
