const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.get("/users", usersController.getUsers);
router.post("/users", usersController.createUser);

module.exports = router;
