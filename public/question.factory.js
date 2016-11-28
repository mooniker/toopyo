'use strict'

angular.module('toopyo').factory('Question', function ($resource) {
  return $resource('/questions/:questionId/:subResource', {
    questionId: '@id'
  }, {
    decisions: {
      params: {
        // questionId: '@id',
        subResource: 'decisions'
      },
      method: 'GET'
    },
    createDecision: {
      params: {
        questionId: '@questionId',
        subResource: 'decisions'
      },
      method: 'POST'
    },
    delete: {
      params: {
        questionId: '@id'
      },
      method: 'DELETE'
    }
  })
})
