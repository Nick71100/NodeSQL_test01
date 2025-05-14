const express = require("express");
const router = express.Router();
const ArticleModel = require("../controllers/article.controller");
const {
  validateArticle,
} = require("../middleware/validate.article.middleware");

router.post("/created", validateArticle, ArticleModel.createArticle);

router.get("/", ArticleModel.getAllArticles);

router.get("/:id", ArticleModel.getArticleById);

router.put("/:id", validateArticle, ArticleModel.updateArticle);

router.delete("/:id", ArticleModel.deleteArticle);

module.exports = router;
