'use strict'

angular.module('toopyo').component('ballot', {
  templateUrl: 'ballot.template.html',
  controller: function BallotController ($routeParams, Question, $log) {
    var vm = this

    this.$onInit = function () {
      vm.question = Question.get({
        questionId: $routeParams.questionId
      })
      vm.decisions = Question.query({
        questionId: $routeParams.questionId,
        subResource: 'decisions'
      })
    }    
  }
})
