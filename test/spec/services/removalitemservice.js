'use strict';

describe('Service: removalItemService', function () {

  // load the service's module
  beforeEach(module('homeRemovalApp'));

  // instantiate service
  var removalItemService;
  beforeEach(inject(function (_removalItemService_) {
    removalItemService = _removalItemService_;
  }));

  it('should be something', function () {
    expect(!!removalItemService).toBe(true);
  });

  it('should be initialised with no item', function() {
    expect(removalItemService.items.length).toEqual(0);
  });

  describe('adding item', function() {

    describe('one time', function() {

      it('should only add that one item', function() {
        var item = {room: 'Living Room', content: 'books', weight: 5, isFragile: false};

        removalItemService.addItem(item);

        expect(removalItemService.items.length).toEqual(1);
        expect(removalItemService.items[0]).toEqual(item);
      });
    });

    describe('multiple items', function() {
      
      it('should increment id by one', function() {
        var books = {room: 'Living Room', content: 'books', weight: 5, isFragile: false};
        var pc = {room: 'Living Room', content: 'pc', weight: 2, isFragile: true};
        
        removalItemService.addItem(books);
        expect(removalItemService.items[0].id).toEqual(0);

        removalItemService.addItem(pc);
        expect(removalItemService.items[1].id).toEqual(1);
      });

      it('should add exactly same items', function() {
        var item1 = {room: 'Living Room', content: 'books', weight: 5, isFragile: false};
        var item2 = {room: 'Living Room', content: 'books', weight: 5, isFragile: false};

        removalItemService.addItem(item1);
        removalItemService.addItem(item2);

        expect(removalItemService.items.length).toEqual(2);
      });
    });
  });

  describe('deleting item', function() {
    
    describe('with id does not exist', function() {

      it('should NOT delete any items', function() {
        var books = {room: 'Living Room', content: 'books', weight: 5, isFragile: false};
        var pc = {room: 'Living Room', content: 'pc', weight: 2, isFragile: true};
        var unicorn = {room: 'Unicorn Stables', content: 'unicorn', weight: 200, isFragile: true, id: 5};

        removalItemService.addItem(books);
        removalItemService.addItem(pc);

        removalItemService.deleteItem(unicorn);

        expect(removalItemService.items.length).toEqual(2);
      });
    });    

    describe('which does not exist', function() {

      it('should NOT delete any items', function() {
        var books = {room: 'Living Room', content: 'books', weight: 5, isFragile: false};
        var pc = {room: 'Living Room', content: 'pc', weight: 2, isFragile: true};
        var unicorn = {room: 'Unicorn Stables', content: 'unicorn', weight: 200, isFragile: true};

        removalItemService.addItem(books);
        removalItemService.addItem(pc);

        removalItemService.deleteItem(unicorn);

        expect(removalItemService.items.length).toEqual(2);
      });
    });

    describe('which exists', function() {

      it('should remove it from the service', function() {
        var books = {room: 'Living Room', content: 'books', weight: 5, isFragile: false};

        removalItemService.addItem(books);
        var itemToDelete = removalItemService.items[0];
        removalItemService.deleteItem(itemToDelete);

        expect(removalItemService.items.length).toEqual(0);
      });
    });
  });

  describe('update item', function() {

    it('should update all properties', function() {
      var item = {room: 'one', content: 'one', weight: 1, isFragile: true};

      removalItemService.addItem(item);
      var itemToUpdate = removalItemService.items[0];
      itemToUpdate.room = 'two';
      itemToUpdate.content = 'two';
      itemToUpdate.weight = 2;
      itemToUpdate.isFragile = false;

      removalItemService.updateItem(itemToUpdate);
      var updatedItem = removalItemService.items[0];

      expect(updatedItem.room).toEqual('two');
      expect(updatedItem.content).toEqual('two');
      expect(updatedItem.weight).toEqual(2);
      expect(updatedItem.isFragile).toEqual(false);
    });

    it('should not change id', function() {
      var item = {room: 'one', content: 'one', weight: 1, isFragile: true};

      removalItemService.addItem(item);
      var originalId = removalItemService.items[0].id;
      var itemToUpdate = removalItemService.items[0];
      itemToUpdate.room = 'two';
      itemToUpdate.content = 'two';
      itemToUpdate.weight = 2;
      itemToUpdate.isFragile = false;

      removalItemService.updateItem(itemToUpdate);
      var newId = removalItemService.items[0].id;

      expect(originalId).toEqual(newId);
    });
  });
});
