var express = require("express");
const ProjectController = require("../controller/ProjectController");
var router = express.Router();

/* GET home page. */
router.get("/filter/:section", ProjectController.index);
router.get("/year/:year/:section", ProjectController.filterByYear);
router.get("/filterAllByYear/:year", ProjectController.filterAllProject);
router.get("/find/:id", ProjectController.show);
router.post("/createObstacle", ProjectController.createObstacle);
router.get("/index", ProjectController.getAll);

module.exports = router;
