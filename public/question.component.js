'use strict'

angular.module('toopyo').component('question', {
  templateUrl: 'question.template.html',
  controller: function QuestionController ($routeParams, Question, Modal, $location, $log) {
    var vm = this

    this.load = function () {
      vm.question = Question.get({
        questionId: $routeParams.questionId
      })
      vm.decisions = Question.query({
        questionId: $routeParams.questionId,
        subResource: 'decisions'
      })
    }

    this.callQuestion = function () {
      $location.path('/questions')
    }

    this.deleteQuestion = function () {
      $log.log('Clicked to delete', vm.question)
      Modal.confirmDelete('question', vm.question.prompt).result.then(function (confirmed) {
        vm.question.$delete(function () {
          $log.log('Question deleted.')
          $location.path('/questions')
        })
      }).catch(function () {
        $log.info('Delete cancelled: ' + new Date())
      })
    }

    this.submitDecision = function (title) {
      $log.log(title)
      Question.createDecision({
        title: title,
        questionId: $routeParams.questionId
      }).$promise.then(function (decision) {
        vm.newTitle = null
        vm.load()
      }).catch($log.error)
    }

    this.deleteDecision = function (decisionId) {
      Question.deleteDecision({
        questionId: $routeParams.questionId,
        decisionId: decisionId
      }).$promise.then(vm.load).catch($log.error)
    }

    this.$onInit = function () {
      vm.load()
    }
  }
})
