"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("MstSections", [
      {
        code: "PJD",
        name: "Project Development",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "PSD",
        name: "Process Development",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "RMD",
        name: "Raw Material Development",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "PMD",
        name: "Packaging Material Development",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("MstSections", null, {}); 
  },
};
