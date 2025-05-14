const express = require("express");
const router = express.Router();
const { validateUser } = require("../middleware/validate.user.middleware");
const UserController = require("../controllers/user.controller");

router.post("/create", validateUser, UserController.createUser);

router.get("/", UserController.getAllUsers);

router.get("/:id", UserController.getUserById);

router.put("/:id", validateUser, UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
