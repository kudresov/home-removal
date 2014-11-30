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
    var id = 0;
    this.items = [];
    // this.items = [
    //   {room: 'One', content: 'books', weight: 25, isFragile: false}, 
    //   {room: 'Two', content: 'rocks', weight: 32, isFragile: false}, 
    //   {room: 'Three', content: 'pc', weight: 4, isFragile: true}, 
    //   {room: 'Four', content: 'utencils', weight: 3, isFragile: false}, 
    //   {room: 'Five', content: 'clothes', weight: 5, isFragile: false},
    //   {room: 'Six', content: 'shoes', weight: 5, isFragile: false},
    //   {room: 'Seven', content: 'belts', weight: 1, isFragile: false}];

    this.addItem = function(item) {
      console.log('Removal Item Service: Item added');
      item.id = id;
      id+=1;
      this.items.push(item);
    };

    this.updateItem = function(item) {
      this.deleteItem(item);
      this.addItem(item);
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
      console.log('Removal Item Service: Item deleted');
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
