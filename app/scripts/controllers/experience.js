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
      'data/cv/rwe.json',
      'data/cv/maersk.json',
      'data/cv/beazley.json',
      'data/cv/ihs.json',
      'data/cv/bis.json'
    ];
    var experiences = [];
    for (var i = experienceFiles.length - 1; i >= 0; i--) {
      $http.get(experienceFiles[i]).success(function(data) {
        experiences.push(data);
        if (experiences.length === experienceFiles.length) {
          experiences.sort(function(a,b) { return b.period.start.localeCompare(a.period.start); } );
          $scope.experiences = experiences;
        }
      });
    }
  });
