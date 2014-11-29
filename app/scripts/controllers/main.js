'use strict';

/**
 * @ngdoc function
 * @name homeRemovalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homeRemovalApp
 */
angular.module('homeRemovalApp')
  .controller('MainCtrl', function ($scope, removalItemService) {
    $scope.removalItemService = removalItemService;
    $scope.addItem = function(item) {
      removalItemService.addItem(item);
      $scope.selectedItem = null;
    };

    $scope.selectItem = function(item) {
      $scope.selectedItem = item;
    };
  });
