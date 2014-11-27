'use strict';

/**
 * @ngdoc service
 * @name homeRemovalApp.removalItemService
 * @description
 * # removalItemService
 * Service in the homeRemovalApp.
 */
angular.module('homeRemovalApp')
  .service('removalItemService', function () {
    this.items = [];

    this.addItem = function(item) {
      console.log('Item added');
      console.log(item);
      this.items.push(item);
      this.item = null;
    };

    this.deleteItem = function(item) {
      var itemToRemoveIndex = this.items.indexOf(item);
      delete array[itemToRemoveIndex];
      console.log('Item deleted');
    };
  });
