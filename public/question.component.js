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

    this.submitDecision = function (label) {
      $log.log(label)
      Question.createDecision({
        label: label,
        questionId: $routeParams.questionId
      }).$promise.then(function (decision) {
        vm.newLabel = null
        vm.load()
      }).catch($log.error)
    }

    this.$onInit = function () {
      vm.load()
    }
  }
})
