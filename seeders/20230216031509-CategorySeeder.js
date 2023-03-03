"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("MstCategories", [
      {
        code: "MOMPre",
        name: "MoM/Email informasi project",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "PP",
        name: "Proposal Project Development",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "FP",
        name: "Form Usulan Perubahan No. FR/TD/002b-1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "CP",
        name: "Checklist Persiapan Perubahan No. FR/TD/002b-2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "OP",
        name: "Form Otorisasi Pemberlakuan Perubahan No. FR/TD/002b-3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "CBP",
        name: "List Kebutuhan Dokumen Calon Pemasok Baru No. FR/TD/002b-4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "FR",
        name: "Feasibility Report",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "DQ",
        name: "Design Qualification",
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
        code: "IQ",
        name: "Installation Qualification",
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
        code: "PQ",
        name: "Performance Qualification",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "PVP",
        name: "Permohonan Validasi Project",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "PV",
        name: "Protocol Validasi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "MR",
        name: "Mitigation Risk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "RV",
        name: "Laporan Hasil Validasi Project",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "IM",
        name: "Internal Memo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "FM",
        name: "Form monitoring hasil development No. FR/TD/003",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "FST",
        name: "Form serah terima dan sosialisasi No. FR/TD/002a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "SKQA",
        name: "SK QA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "SPEC",
        name: "Informasi spec alat/mesin/bahan, layout",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "SOP",
        name: "SOP Project",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "SENT",
        name: "Laporan Sensory test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "STABT",
        name: "Laporan Stability Test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "LHP",
        name: "Laporan Hasil Percobaan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "PA",
        name: "Permohonan Analisa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "VS",
        name: "Visit Supplier",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "LPPOM",
        name: "Approval LPPOM",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "MOMPRET",
        name: "MOM Persiapan trial",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "QS",
        name: "Quality Statement (QS)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "PDA",
        name: "Proposal Design Approval",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "AAS",
        name: "Approval Artwork Supplier",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "MD",
        name: "Master design",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: "AW",
        name: "Artwork Supplier",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("MstCategories", null, {});
  },
};
