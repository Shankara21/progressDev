module.exports = function (sequelize, DataTypes) {
  const Project = sequelize.define("Project", { timestamp: false });
  const SectionCategory = sequelize.define("SectionCategory", {
    timestamp: false,
  });
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
  Section.hasMany(Project, { foreignKey: "sectionId" });
  Section.hasMany(SectionCategory, { foreignKey: "sectionId" });
  return Section;
};
