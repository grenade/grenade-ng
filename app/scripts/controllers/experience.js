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
      'data/cv/mozilla.json',
      'data/cv/bis.json',
      'data/cv/ihs.json',
      'data/cv/beazley.json',
      'data/cv/maersk.json',
      'data/cv/rwe.json',
      'data/cv/keane.json',
      'data/cv/visa.json',
      'data/cv/charteris.json',
      'data/cv/bt-london.json',
      'data/cv/hpa.json',
      'data/cv/atos.json',
      'data/cv/conchango.json',
      'data/cv/mcorp.json',
      'data/cv/bt-exeter.json',
      'data/cv/centrax.json',
      'data/cv/devon.json',
      'data/cv/txtnation.json'
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
