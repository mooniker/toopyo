'use strict'

angular.module('toopyo').factory('Question', function ($resource) {
  return $resource('/questions/:questionId/:subResource/:decisionId', {
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
    deleteDecision: {
      params: {
        questionId: '@questionId',
        subResource: 'decisions',
        decisionId: '@decisionId'
      },
      method: 'DELETE'
    },
    delete: {
      params: {
        questionId: '@id'
      },
      method: 'DELETE'
    }
  })
})
