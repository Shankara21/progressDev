module.exports = function (sequelize, DataTypes) {
  const projectDetails = sequelize.define("projectDetails", {
    timestamp: false,
  });
  const Section = sequelize.define("Section", { timestamp: false });
  const Project = sequelize.define(
    "Project",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      progress: {
        type: DataTypes.FLOAT,
      },
      obstacle: {
        type: DataTypes.TEXT,
      },
      sectionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "MstSections",
          key: "id",
        },
      },
      targetTime: {
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
      tableName: "MstProjects",
    }
  );
  Project.hasMany(projectDetails, { foreignKey: "projectId" });
  Project.belongsTo(Section, { foreignKey: "sectionId" });
  return Project;
};
