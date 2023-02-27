const { Project } = require("../models");

module.exports = {
  index: async (req, res) => {
    try {
      const project = await Project.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(project);
    } catch (error) {
      console.log(error);
    }
  },
  show: async (req, res) => {
    try {
      const project = await Project.findOne({
        where: { id: req.params.id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(project);
    } catch (error) {
      console.log(error);
    }
  },
};
