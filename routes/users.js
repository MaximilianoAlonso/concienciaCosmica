const express = require("express");
const { profile, login, register } = require("../controllers/usersController");
const router = express.Router();

/* GET users listing. */
router.get("/", profile)
.get("/login", login)
.get("/register", register);

module.exports = router;
