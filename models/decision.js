'use strict';
module.exports = function(sequelize, DataTypes) {
  var Decision = sequelize.define('Decision', {
    QuestionId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Decision.belongsTo(models.Question)
      }
    }
  });
  return Decision;
};
