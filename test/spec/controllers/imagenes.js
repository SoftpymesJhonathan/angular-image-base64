'use strict';

describe('Controller: ImagenesCtrl', function () {

  // load the controller's module
  beforeEach(module('proyectoImagenApp'));

  var ImagenesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImagenesCtrl = $controller('ImagenesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ImagenesCtrl.awesomeThings.length).toBe(3);
  });
});
