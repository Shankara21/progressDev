var express = require("express");
const ProjectDetailsController = require("../controller/ProjectDetailsController");
var router = express.Router();

// upload file
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

/* GET home page. */
router.post("/test", ProjectDetailsController.update);
router.get("/", ProjectDetailsController.index);
router.post("/", ProjectDetailsController.create);
router.get(
  "/status/:status/:projectId",
  ProjectDetailsController.getProjectByStatus
);
router.put("/", upload.single("document"), ProjectDetailsController.update);
router.delete("/:id", ProjectDetailsController.deleteProject);

module.exports = router;
