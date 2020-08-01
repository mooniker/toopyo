'use strict'

angular.module('toopyo').component('questionEdit', {
  templateUrl: 'question-edit.template.html',
  controller: function QuestionEditController (Question, uibDateParser, $log) {
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

    // this.submitDecision = function (title) {
    //   $log.log(title)
    //   Question.createDecision({
    //     title: title,
    //     questionId: $routeParams.questionId
    //   }).$promise.then(function (decision) {
    //     vm.newTitle = null
    //     vm.load()
    //     vm.addNewDecision = false
    //   }).catch($log.error)
    // }

    // this.deleteDecision = function (decisionId) {
    //   $log.log('Clicked to delete decision #' + decisionId)
    //   Modal.confirmDelete('decision', decisionId).result.then(function (confirmed) {
    //     Question.deleteDecision({
    //       questionId: $routeParams.questionId,
    //       decisionId: decisionId
    //     }).$promise.then(vm.load).catch($log.error)
    //   }).catch(function () {
    //     $log.info('Delete decision cancelled.')
    //   })
    // }

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
      $log.log('question on init', vm.question)
      if (vm.question.decisions) {
        
      }
      vm.decisions = ['Alpha', 'Beta']
      vm.newTitle = ''
      vm.resetTimes()
    }
  },
  bindings: {
    question: '<',
    onUpdate: '&',
    onCancel: '&'
  }
})
