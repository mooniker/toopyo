'use strict'

angular.module('toopyo').component('question', {
  templateUrl: 'question.template.html',
  controller: function QuestionController ($routeParams, Question, $log) {
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
