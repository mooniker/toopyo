'use strict'

angular.module('toopyo').component('questionCreate', {
  templateUrl: 'question-create.template.html',
  controller: function QuestionCreateController (Question, $log) {
    var vm = this
    // this.load = function (payload) {
    //   // $log.log('payload', payload)
    //   vm.questions = payload
    // }
    this.submit = function () {
      vm.question.UserId = null
      vm.question.begin = new Date()
      var tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      vm.question.end = tomorrow
      vm.question.$save(function () {
        $log.log('Question saved.')
        vm.onUpdate()
        vm.question = {}
      })
    }
    this.$onInit = function () {

      vm.question = new Question()
    }
  },
  bindings: {
    question: '=',
    onUpdate: '&'
  }
})
