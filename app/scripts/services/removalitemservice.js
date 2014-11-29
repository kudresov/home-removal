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
    this.items = [{room: 'One', content: 'ABC'}];

    this.addItem = function(item) {
      console.log('Removal Item Service: Item added');
      this.items.push(item);
    };

    this.deleteItem = function(item) {
      var itemToRemoveIndex = this.items.indexOf(item);
      if (itemToRemoveIndex > -1) {
        this.items.splice(itemToRemoveIndex, 1);
      }
      console.log('Removal Item Service: Item deleted');
    };
  });
