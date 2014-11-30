'use strict';
 
 
describe('home', function() {
 
  beforeEach(function () {
    browser.get('/');
  });
 
  it('should not redirect you anywhere', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  }); 
});