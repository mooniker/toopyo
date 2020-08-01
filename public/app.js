(function () {
  'use strict'

  // Declare app level module which depends on views, and components
  angular
    .module('toopyo', [
      'ngRoute',
      'ngResource',
      'ui.bootstrap',
      'angularMoment'
    ])
  .config([
    '$locationProvider',
    '$routeProvider',
    RoutingConfig
  ])

  function RoutingConfig ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!')

    $routeProvider
      .when('/', {
        template: '<home></home>'
      })
      .when('/questions', {
        template: '<question-index></question-index>'
      })
      .when('/questions/:questionId', {
        template: '<question></question>'
      })
      .when('/questions/:questionId/ballot', {
        template: '<ballot></ballot>'
      })
      .otherwise({
        redirectTo: '/'
      })
  }
})()

