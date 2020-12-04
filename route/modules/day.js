const express = require("express");
const controller = require("../../controller/day");
const authMiddleware = require("../../middleware/auth");
const auth = require("../../middleware/auth");
const router = express.Router();

router.get("/", authMiddleware, controller.list);
router.post("/", [auth, controller.validate("create")], controller.create);
router.put("/", [auth, controller.validate("update")], controller.update);
router.delete("/:id", [auth, controller.validate("delete")], controller.delete);

module.exports = router;
