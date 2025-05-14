const { body, validationResult } = require("express-validator");

exports.validateArticle = [
  body("titre").notEmpty().withMessage("Titre requis"),

  body("contenu").notEmpty().withMessage("Contenu requis"),

  body("auteur_id").notEmpty().withMessage("Id de l'auteur requis"),

  body("date_publication").isDate().withMessage("Date de publication requis"),

  body("statut").notEmpty().withMessage("Statut requis"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
