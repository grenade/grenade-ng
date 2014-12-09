'use strict';

/**
 * @ngdoc function
 * @name grenadeApp.controller:ExperienceCtrl
 * @description
 * # ExperienceCtrl
 * Controller of the grenadeApp
 */
angular.module('grenadeApp')
  .controller('ExperienceCtrl', function ($scope, $http) {
    var experienceFiles = [
      'data/cv/bis.json',
      'data/cv/ihs.json',
      'data/cv/beazley.json',
      'data/cv/maersk.json',
      'data/cv/rwe.json'
    ];
    $scope.experiences = [];
    for (var i = experienceFiles.length - 1; i >= 0; i--) {
      $http.get(experienceFiles[i]).success(function(data) {
        $scope.experiences.push(data);
      });
    };
  });
