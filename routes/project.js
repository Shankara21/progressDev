var express = require('express');
const ProjectController = require('../controller/ProjectController');
var router = express.Router();

/* GET home page. */
router.get('/', ProjectController.index);

module.exports = router;
