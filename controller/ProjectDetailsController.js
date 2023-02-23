const { QueryTypes } = require("sequelize");
const { Category, Project, ProjectDetails, sequelize } = require("../models");
const connect = require("./../config/connection");

module.exports = {
  index: async (req, res) => {
    try {
      const filter = await connect.progressDev.query(
        `Select categoryId, projectId from mstprojectdetails where projectId=1`,
        { type: QueryTypes.SELECT }
      );
      const test = await sequelize.query(
        `Select categoryId, projectId from mstprojectdetails where projectId=1`,
        { type: QueryTypes.SELECT }
      );
      const valuePerDocument = 100 / filter.length;
      // res.status(200).json(valuePerDocument.toFixed(1) * 2)
      res.status(200).json(test);
    } catch (error) {
      console.log(error);
    }
  },
  create: async (req, res) => {
    try {
      const { name, category } = req.body;
      const project = await Project.create({ name });
      // find latest project
      const latestProject = await Project.findOne({
        order: [["id", "DESC"]],
      });
      for (let i = 0; i < category.length; i++) {
        const categoryData = await Category.findOne({
          where: { code: category[i] },
        });
        console.log(latestProject.id);
        console.log(categoryData.id);
        await ProjectDetails.create({
          projectId: latestProject.id,
          categoryId: categoryData.id,
        });
      }

      res.status(200).json({
        message: "success",
        latestProject,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { status, projectId } = req.body;

      const projectDetails = await sequelize.query(
        `SELECT * FROM MstProjectDetails WHERE projectId = ${projectId} AND categoryId = 1`,
        {
          type: QueryTypes.SELECT,
        }
      );
      res.status(200).json(projectDetails);
    } catch (error) {
      console.log(error);
    }
  },
  getProjectByStatus: async (req, res) => {
    try {
      const { status } = req.params;
      const projectDone = await ProjectDetails.findAll({
        where: { status: status },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: Project,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: Category,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });
      res.status(200).json(projectDone);
    } catch (error) {
      console.log(error);
    }
  },
};
