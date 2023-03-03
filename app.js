var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

require("dotenv").config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var projectRouter = require('./routes/project');
var projectDetailRouter = require('./routes/projectdetails');
var sectionRouter = require('./routes/section');
var sectionCategoryRouter = require('./routes/sectionCategory');

var app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoryRouter);
app.use('/projects', projectRouter);
app.use('/projectdetails', projectDetailRouter);
app.use('/sections', sectionRouter);
app.use('/sectioncategories', sectionCategoryRouter);


module.exports = app;
