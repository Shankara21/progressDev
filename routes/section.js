var express = require("express");
const SectionController = require("../controller/SectionController");
var router = express.Router();

/* GET home page. */
router.get("/", SectionController.index);
router.get("/:id", SectionController.show);

module.exports = router;
