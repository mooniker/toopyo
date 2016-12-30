'use strict'

module.exports = function (sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    UserId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    // end: DataTypes.DATE,
    // begin: DataTypes.DATE,
    end: {
      type: DataTypes.DATE,
      allowNull: true, // allowed till question is called
      validate: {
        min: new Date()
      }
    },
    begin: {
      type: DataTypes.DATE,
      allowNull: true, // allowed till question is called
      validate: {
        min: new Date()
      }
    },
    prompt: DataTypes.STRING,
    summary: DataTypes.STRING,
    // called: {
    //   type: DataTypes.DATE,
    //   allowNull: true,
    //   defaultValue: null
    // }
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Question.hasMany(models.Decision, { onDelete: 'cascade', hooks: true })
        Question.belongsTo(models.User)
        Question.hasMany(models.Vote)
      }
    },
    // validate: {
    //   properlyPut: function () {
    //     if (this.called && (this.prompt && this.begin && this.end && this.begin)) {
    //       throw new Error('Question requires a prompt, a start, and an end.')
    //     }
    //   },
    //   timelyPut: function () {
    //     if (this.end && this.begin && this.end > this.begin && this.begin > new Date()) {
    //       throw new Error('Question must be timely.')
    //     }
    //   }
    // }
  })
  return Question
}
