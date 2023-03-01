module.exports = function (sequelize, DataTypes) {
  const Section = sequelize.define("Section", { timestamp: false });
  const Category = sequelize.define("Category", { timestamp: false });
  const SectionCategory = sequelize.define(
    "SectionCategory",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      sectionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "MstSections",
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "MstCategories",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "sectionCategories",
    }
  );
  SectionCategory.belongsTo(Section, { foreignKey: "sectionId" });
  SectionCategory.belongsTo(Category, { foreignKey: "categoryId" });
  return SectionCategory;
};
