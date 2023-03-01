const { Project, Section } = require("../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const amount = 4;
      let projects = [];
      for (let i = 1; i <= amount; i++) {
        const project = await Project.findAll({
          where: { sectionId: i },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          include: [
            {
              model: Section,
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
        });
        const section = await Section.findOne({
          where: { id: i },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          }
        })
        projects.push({section, project});
      }
      res.status(200).json(projects);
    } catch (error) {
      console.log(error);
    }
  },
  index: async (req, res) => {
    try {
      const { section } = req.params;
      const sectionFound = await Section.findOne({
        where: { code: section },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const projects = await Project.findAll({
        where: { sectionId: sectionFound.id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: Section,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });
      res.json({ projects, sectionFound });
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
  createObstacle: async (req, res) => {
    try {
      const { obstacle, id } = req.body;
      const updateProject = await Project.update(
        {
          obstacle: obstacle,
        },
        {
          where: { id },
        }
      );
      res.status(200).json(updateProject);
    } catch (error) {
      console.log(error);
    }
  },
};
