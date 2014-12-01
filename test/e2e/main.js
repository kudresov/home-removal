'use strict';
 
describe('Home Removal App:', function() {
 
  describe('When navigating to main page', function() {
    beforeEach(function () {
      browser.get('/');
    });

    it('should not redirect you anywhere', function() {
      expect(browser.getLocationAbsUrl()).toMatch('/');
    });

    describe('and clicking new item', function() {

      it('should show a form', function() {
        var newItemButton = element(by.xpath("//*[contains(text(),'New Item')]"));
        var form = element(by.xpath("//form"));
        expect(form.isDisplayed()).toBe(false);

        newItemButton.click();
        
        expect(form.isDisplayed()).toBe(true);
      });
    });
  });
});