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
      scope: {
        item: '='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.addItem = function(item) {
          removalItemService.addItem(item);
          scope.item = null;
        }
      }
    };
  });
