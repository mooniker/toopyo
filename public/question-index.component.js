'use strict'

angular.module('toopyo').component('questionIndex', {
  templateUrl: 'question-index.template.html',
  controller: function QuestionIndexController (Question, Modal, $log) {
    var vm = this
    this.load = function () {
      vm.questions = Question.query()
    }
    this.delete = function (question) {
      $log.log('Clicked to delete', question)
      Modal.confirmDelete('question', question.prompt).result.then(function (confirmed) {
        question.$delete(function () {
          $log.log('Question deleted.')
          vm.load()
        })
      }).catch(function () {
        $log.info('Delete cancelled: ' + new Date())
      })
      // Question.remove(question)
    }
    this.$onInit = function () {
      vm.load()
    }
  }
})
