const express = require("express");
const router = express.Router();
const controller = require("../../controller/test");

router.get("/", controller.test);
router.get("/db", controller.db);
module.exports = router;
