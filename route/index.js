const express = require("express");
const day = require("./modules/day");
const test = require("./modules/test");

const router = express.Router();
router.use("/day", day);
router.use("/test", test);

module.exports = router;
