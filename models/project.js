module.exports = function (sequelize, DataTypes) {
  const projectDetails = sequelize.define("projectDetails", {
    timestamp: false,
  });
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
  return Project;
};
