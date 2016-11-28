'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define('Vote', {
    UserId: DataTypes.INTEGER,
    QuestionId: DataTypes.INTEGER,
    DecisionId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Vote.belongsTo(models.User)
        Vote.belongsTo(models.Question)
        Vote.belongsTo(models.Decision)
      }
    }
  });
  return Vote;
};