module.exports = function (sequelize, DataTypes) {
  const projectDetails = sequelize.define("projectDetails", {
    timestamp: false,
  });
  const Category = sequelize.define(
    "Category",
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
      tableName: "MstCategories",
    }
  );
  Category.hasMany(projectDetails, { foreignKey: 'categoryId' });
  
  return Category;
};
