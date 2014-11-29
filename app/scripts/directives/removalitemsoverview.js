'use strict';

/**
 * @ngdoc directive
 * @name homeRemovalApp.directive:removalItemsOverview
 * @description
 * # removalItemsOverview
 */
angular.module('homeRemovalApp')
  .directive('removalItemsOverview', function (removalItemService) {
    return {
      templateUrl: 'templates/removalItemsOverview.html',
      scope: {},
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.dataService = removalItemService;
        scope.items = removalItemService.items;
      }
    };
  });
