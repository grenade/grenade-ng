'use strict';

/**
 * @ngdoc function
 * @name grenadeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the grenadeApp
 */
angular.module('grenadeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
