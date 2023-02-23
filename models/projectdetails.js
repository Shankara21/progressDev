module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define("Category", { timestamp: false });
  const Project = sequelize.define("Project", { timestamp: false });
  const ProjectDetails = sequelize.define(
    "ProjectDetails",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      projectId: {
        type: DataTypes.INTEGER,
        references: {
          model: "MstProjects",
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
      document: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
      tableName: "MstProjectDetails",
    }
  );
  ProjectDetails.belongsTo(Project, { foreignKey: "projectId" });
  ProjectDetails.belongsTo(Category, { foreignKey: "categoryId" });
  return ProjectDetails;
};
