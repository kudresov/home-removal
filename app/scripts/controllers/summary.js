'use strict';

/**
 * @ngdoc function
 * @name homeRemovalApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the homeRemovalApp
 */
angular.module('homeRemovalApp')
  .controller('SummaryCtrl', function ($scope, removalItemService) {
    $scope.removalItemService = removalItemService;
  });
