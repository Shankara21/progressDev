const { QueryTypes } = require("sequelize");
const { Category, Project, ProjectDetails, sequelize } = require("../models");
const connect = require("./../config/connection");

module.exports = {
  index: async (req, res) => {
    try {
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

  getProjectByStatus: async (req, res) => {
    try {
      const { status, projectId } = req.params;
      const projectByProjectId = await ProjectDetails.findAll({
        where: { projectId: projectId },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const projectDone = await ProjectDetails.findAll({
        where: { status: status, projectId: projectId },
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
      const amount = projectByProjectId.length;
      const valuePerDocument = 100 / amount;
      const valueDone = valuePerDocument * projectDone.length;
      res
        .status(200)
        .json({ projectDone, valueDone, valuePerDocument, amount });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const projectDetails = await ProjectDetails.findOne({
        where: {
          projectId: req.body.projectId,
          categoryId: req.body.categoryId,
        },
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
      const updateProjectDetails = await ProjectDetails.update(
        {
          status: 1,
          document: `uploads/${req.file.filename}`,
        },
        {
          where: {
            projectId: req.body.projectId,
            categoryId: req.body.categoryId,
          },
        }
      );
      const countByStatus1 = await ProjectDetails.count({
        where: {
          projectId: req.body.projectId,
          status: 1,
        },
      });
      const countByProjectId = await ProjectDetails.count({
        where: {
          projectId: req.body.projectId,
        },
      });
      const valuePerDocument = 100 / countByProjectId;
      const valueDone = valuePerDocument.toFixed(2) * countByStatus1;
      const updateProject = await Project.update(
        {
          progress: valueDone,
        },
        {
          where: {
            id: req.body.projectId,
          },
        }
      );
      res.status(200).json({ updateProject, updateProjectDetails });
      res.status(200).json({ valuePerDocument, valueDone });
    } catch (error) {
      console.log(error);
    }
  },
};
