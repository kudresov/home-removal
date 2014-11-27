'use strict';

describe('Service: removalItemService', function () {

  // load the service's module
  beforeEach(module('homeRemovalApp'));

  // instantiate service
  var removalItemService;
  beforeEach(inject(function (_removalItemService_) {
    removalItemService = _removalItemService_;
  }));

  it('should do something', function () {
    expect(!!removalItemService).toBe(true);
  });

});
