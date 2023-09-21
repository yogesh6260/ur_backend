const express = require("express");
const { userRegister } = require("../controllers/User.controller");

const router = express.Router();

router.post("/user", userRegister);

module.exports = router;
