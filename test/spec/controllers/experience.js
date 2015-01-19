'use strict';

describe('Controller: ExperienceCtrl', function () {

  // load the controller's module
  beforeEach(module('grenadeApp'));

  var ExperienceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExperienceCtrl = $controller('ExperienceCtrl', {
      $scope: scope
    });
  }));


  it('should attach a list of experiences to the scope', function () {
    expect(scope.experiences.length).toBe(17);
  });

});
