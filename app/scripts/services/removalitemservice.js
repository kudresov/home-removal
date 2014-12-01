'use strict';

/**
 * @ngdoc service
 * @name homeRemovalApp.removalItemService
 * @description
 * # removalItemService
 * Service in the homeRemovalApp. This is the main service of the app it is a central hub for controllers.
 */
angular.module('homeRemovalApp')
  .service('removalItemService', function () {
    var id = 0;
    this.items = [];

    this.addItem = function(item) {
      item.id = id;
      id+=1;
      this.items.push(item);
    };

    this.updateItem = function(item) {
      this.deleteItem(item);
      this.items.push(item);
    };

    this.deleteItem = function(item) {
      var itemToRemoveIndex = -1;
      for (var i = 0, len = this.items.length; i < len; i++) {
        if(this.items[i].id === item.id) {
          itemToRemoveIndex = i;
          break;
        }
      }

      if (itemToRemoveIndex > -1) {
        this.items.splice(itemToRemoveIndex, 1);
      }
    };

    this.isNewItem = function(item) {
      var itemIndex = this.items.indexOf(item);
      if (itemIndex === -1) {
        return true;
      } else {
        return false;
      }
    };
  });
