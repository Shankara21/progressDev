const { Category, Section, SectionCategory } = require("../models");

module.exports = {
  showBySection: async (req, res) => {
    try {
      const { section } = req.params;
      const sectionFound = await Section.findOne({
        where: { code: section },
      })
      const sectionCategories = await SectionCategory.findAll({
        where: { sectionId: sectionFound.id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: Category,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: Section,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });
      const amount = sectionCategories.length;
      res.status(200).json({ sectionCategories, amount });
    } catch (error) {
      console.log(error);
    }
  },
};
