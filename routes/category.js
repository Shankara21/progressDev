var express = require("express");
const CategoryController = require("../controller/CategoryController");
var router = express.Router();

/* GET home page. */
router.get("/", CategoryController.index);
router.get("/:id", CategoryController.show);
router.post("/", CategoryController.create);
router.put("/:id", CategoryController.update);
router.delete("/:id", CategoryController.delete);

module.exports = router;
