const express = require("express");
const { verifyIp } = require("../controllers/Ip.controller");

const router = express.Router();

router.get("/verify-address", verifyIp);

module.exports = router;
