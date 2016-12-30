'use strict'

angular.module('toopyo').component('questionCreate', {
  templateUrl: 'question-create.template.html',
  controller: function QuestionCreateController (Question, uibDateParser, $log) {
    var vm = this
    // this.load = function (payload) {
    //   // $log.log('payload', payload)
    //   vm.questions = payload
    // }
    this.submit = function () {
      vm.question.UserId = null
      vm.question.begin = new Date()
      // var tomorrow = new Date()
      // tomorrow.setDate(tomorrow.getDate() + 1)
      // vm.question.end = tomorrow
      // vm.question.$save(function (obj) {
      //   $log.log('Question saved.', obj)
      //   vm.onUpdate()
      //   vm.question = {}
      // })
      Question.save(vm.question, function (msg) {
        $log.log('Question saved.', msg)
        vm.onUpdate()
        vm.question = new Question()
      })
    }

    this.$onChanges = function (changes) {
      $log.log(changes)
      if (changes.question) {
        // $log.log(changes.beginDate)
      }
    }

    this.resetTimes = function () {
      var oneHourLater = new Date()
      oneHourLater.setHours(oneHourLater.getHours() + 1)
      var twoHoursLater = new Date()
      twoHoursLater = twoHoursLater.setHours(twoHoursLater.getHours() + 2)
      vm.question.begin = vm.question.begin || new Date() //oneHourLater
      vm.question.end = vm.question.end || twoHoursLater
      $log.log(twoHoursLater)
    }

    this.$onInit = function () {
      vm.question = vm.question || new Question()
      vm.resetTimes()
    }
  },
  bindings: {
    question: '<',
    onUpdate: '&',
    onCancel: '&'
  }
})
