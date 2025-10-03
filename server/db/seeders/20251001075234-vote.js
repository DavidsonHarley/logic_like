"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Votes", [
      {
        idea_id: 1,
        ip_address: "192.168.0.10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idea_id: 2,
        ip_address: "192.168.0.11",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idea_id: 3,
        ip_address: "192.168.0.12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Votes", null, {});
  },
};
