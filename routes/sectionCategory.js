var express = require("express");
const SectionCategoriesController = require("../controller/SectionCategoriesController");

var router = express.Router();

/* GET home page. */
router.get("/:section", SectionCategoriesController.showBySection);

module.exports = router;
