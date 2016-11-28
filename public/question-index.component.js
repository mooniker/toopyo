'use strict'

angular.module('toopyo').component('questionIndex', {
  templateUrl: 'question-index.template.html',
  controller: function QuestionIndexController (Question, $log) {
    var vm = this
    this.load = function () {
      vm.questions = Question.query()
    }
    this.delete = function (question) {
      // $log.log('Want to delete', question)
      question.$delete(function () {
        $log.log('Question deleted.')
        vm.load()
      })
      // Question.remove(question)
    }
    this.$onInit = function () {
      vm.load()
    }
  }
})
