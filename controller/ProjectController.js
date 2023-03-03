const { Project, Section } = require("../models");
const { Op } = require("sequelize").Sequelize;

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
          },
        });
        projects.push({ section, project });
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
          exclude: ["updatedAt"],
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

  filterByYear: async (req, res) => {
    try {
      const { year, section } = req.params;
      const sectionFound = await Section.findOne({
        where: { code: section },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const projects = await Project.findAll({
        where: {
          sectionId: sectionFound.id,
          createdAt: {
            [Op.between]: [`${year}-01-01`, `${year}-12-31`],
          },
        },
        attributes: {
          exclude: ["updatedAt"],
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
      // const projects = await Project.findAll({
      //   // mengambil dari created at jadi tahun
      //   where: {
      //     createdAt: {
      //       [Op.between]: [`${year}-01-01`, `${year}-12-31`],
      //     }
      //   },
      //   attributes: {
      //     exclude: ["createdAt", "updatedAt"],
      //   },
      //   include: [
      //     {
      //       model: Section,
      //       attributes: {
      //         exclude: ["createdAt", "updatedAt"],
      //       },
      //     },
      //   ],
      // });
      res.status(200).json({ projects, sectionFound });
    } catch (error) {
      console.log(error);
    }
  },

  filterAllProject: async (req, res) => {
    try {
      const { year } = req.params;
      const amount = 4;
      let projects = [];
      for (let i = 1; i <= amount; i++) {
        const project = await Project.findAll({
          where: {
            sectionId: i,
            createdAt: {
              [Op.between]: [`${year}-01-01`, `${year}-12-31`],
            },
          },
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
          },
        });
        projects.push({ section, project });
      }
      res.status(200).json(projects);
    } catch (error) {
      console.log(error);
    }
  },
};
