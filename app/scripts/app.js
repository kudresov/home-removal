'use strict';

/**
 * @ngdoc overview
 * @name homeRemovalApp
 * @description
 * # homeRemovalApp
 *
 * Main module of the application.
 */
angular
  .module('homeRemovalApp', [
    'angular.filter',
    'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/summary', {
          templateUrl: 'views/summary.html',
          controller: 'SummaryCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
  });
