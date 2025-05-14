const { body, validationResult } = require("express-validator");

exports.validateUser = [
  body("nom").notEmpty().withMessage("Nom requis"),

  body("prenom").notEmpty().withMessage("Prénom requis"),

  body("age").isInt({ min: 0 }).withMessage("Âge invalide"),

  body("role").notEmpty(),

  body("mail").isEmail().withMessage("Email invalide"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
