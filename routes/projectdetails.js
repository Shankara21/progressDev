var express = require("express");
const ProjectDetailsController = require("../controller/ProjectDetailsController");
var router = express.Router();

/* GET home page. */
router.post("/test", ProjectDetailsController.update);
router.get("/", ProjectDetailsController.index);
router.post("/", ProjectDetailsController.create);
router.get("/status/:status/:projectId", ProjectDetailsController.getProjectByStatus);

module.exports = router;
