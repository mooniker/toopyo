'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      end: {
        type: Sequelize.DATE
      },
      begin: {
        type: Sequelize.DATE
      },
      prompt: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.STRING
      },
      called: { // null if not finalized, otherwise finalization date
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Questions');
  }
};
