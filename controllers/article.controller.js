const ArticleModel = require("../models/article.model");

exports.createArticle = async (req, res) => {
  try {
    const { titre, contenu, auteur_id, date_publication, statut } = req.body;
    const result = await ArticleModel.create({
      titre,
      contenu,
      auteur_id,
      date_publication,
      statut,
    });
    res.status(201).json({ message: "Article créé", id: result.insertId });
  } catch (error) {
    console.error("Erreur de création d'article :", error);
    res
      .status(500)
      .json({ error: "Erreur serveur lors de la création de l'article" });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const article = await ArticleModel.getAll();
    res.status(200).json(article);
  } catch (error) {
    console.error("Erreur de récupération des articles :", error);
    res
      .status(500)
      .json({ error: "Erreur serveur lors de la récupération des articles" });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await ArticleModel.getById(id);
    if (!article.length) {
      return res.status(404).json({ message: "Article non trouvé" });
    }
    res.status(200).json(article[0]);
  } catch (error) {
    console.error("Erreur récupération de l'article :", error);
    res.status(500).json({
      error: "Erreur serveur lors de la récupération de l'article",
    });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, contenu, auteur_id, date_publication, statut } = req.body;
    const result = await ArticleModel.update(id, {
      titre,
      contenu,
      auteur_id,
      date_publication,
      statut,
    });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Article non trouvé" });
    }

    res.status(200).json({ message: "Article mis à jour avec succès" });
  } catch (error) {
    console.error("Erreur de mise à jour article :", error);
    res
      .status(500)
      .json({ error: "Erreur serveur lors de la mise à jour de l'article" });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ArticleModel.delete(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Article non trouvé" });
    }

    res.status(200).json({ message: "Article supprimé avec succès" });
  } catch (error) {
    console.error("Erreur suppression article :", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression de l'article" });
  }
};
