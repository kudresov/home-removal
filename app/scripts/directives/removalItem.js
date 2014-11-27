'use strict';

/**
 * @ngdoc directive
 * @name homeRemovalApp.directive:removalItem
 * @description
 * # removalItem
 */
angular.module('homeRemovalApp')
  .directive('removalItem', function (removalItemService) {
    return {
      templateUrl: 'templates/removalItem.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.dataService = removalItemService;
      }
    };
  });
