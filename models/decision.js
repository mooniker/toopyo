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
    },
    validate: {
      // unique: function () {
      //   if (this.title) {
      //     throw new Error('Decision must contain title unique to decisions in question.')
      //   }
      // }
    }
  });
  return Decision;
};
