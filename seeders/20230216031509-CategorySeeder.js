'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert("MstCategories", [
     {
       code: "DQ",
       name: "Design Qualification",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       code: "IQ",
       name: "Installation Qualification",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       code: "PQ",
       name: "Performance Qualification",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       code: "PV",
       name: "Protocol Validation",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       code: "OQ",
       name: "Operational Qualification",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       code: "RV",
       name: "Report Validation",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       code: "FAT",
       name: "FAT",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       code: "FR",
       name: "Form Usulan Perubahan",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       code: "MS",
       name: "Material Specification",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       code: "PS",
       name: "Packaging Specification",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       code: "QS",
       name: "Quality Statement",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       code: "ST",
       name: "Stability Test",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       code: "SOP",
       name: "Standard Operational Procedure",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
   ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("MstCategories", null, {});
  }
};
