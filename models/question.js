'use strict'

module.exports = function (sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    UserId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    end: DataTypes.DATE,
    begin: DataTypes.DATE,
    prompt: DataTypes.STRING,
    summary: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Question.belongsTo(models.User)
        Question.hasMany(models.Vote)
      }
    }
  })
  return Question
}
