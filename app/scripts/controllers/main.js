'use strict';

/**
 * @ngdoc function
 * @name homeRemovalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homeRemovalApp
 */
angular.module('homeRemovalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.item = {
      room: '',
      weight: '',
      content: '',
      isFragile: ''
    };

    $scope.clearSelection = function() {
      $scope.item = null;
    };
  });
