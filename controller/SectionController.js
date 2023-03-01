const { Section } = require('../models');

module.exports = {
  index: async (req, res) => { 
    try {
      const sections = await Section.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      res.status(200).json(sections);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  show: async (req, res) => { 
    try {
      const { id } = req.params;
      const section = await Section.findOne({
        where: { id },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      res.status(200).json(section);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}