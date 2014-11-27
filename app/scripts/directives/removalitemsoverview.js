'use strict';

/**
 * @ngdoc directive
 * @name homeRemovalApp.directive:removalItemsOverview
 * @description
 * # removalItemsOverview
 */
angular.module('homeRemovalApp')
  .directive('removalItemsOverview', function () {
    return {
      templateUrl: 'templates/removalItemsOverview.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
