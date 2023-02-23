const { Category } = require("../models");

module.exports = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  create: async (req, res) => {
    try {
      const { code, name } = req.body;
      const category = await Category.create({ code, name });
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { code, name } = req.body;
      const category = await Category.update({ code, name }, { where: { id } });
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.destroy({ where: { id } });
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
