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
    $scope.state = 'init';

    $scope.clearSelection = function() {
      $scope.selectedItem = null;
      $scope.state='init';
    };

    $scope.addItem = function(item) {
      removalItemService.addItem(item);
      $scope.clearSelection();
    };

    $scope.updateItem = function(item) {
      removalItemService.updateItem(item);
      $scope.clearSelection();
    };

    $scope.deleteItem = function(item) {
      removalItemService.deleteItem(item);
      $scope.clearSelection();
    };

    $scope.selectItem = function(item) {
      $scope.selectedItem = angular.copy(item);
      $scope.state='edit';
    };
  });
