module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define("Category", { timestamp: false });
  const Section = sequelize.define(
    "Section",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
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
      tableName: "MstSections",
    }
  );
  Section.hasMany(Category, { foreignKey: "sectionId" });
  return Section;
};
