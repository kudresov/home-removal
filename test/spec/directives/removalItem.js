'use strict';

describe('Directive: removaLItem', function () {

  // load the directive's module
  beforeEach(module('homeRemovalApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<removal-item></removal-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the removalItem directive');
  }));
});
