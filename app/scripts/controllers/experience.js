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
    var cv_url = 'https://raw.githubusercontent.com/grenade/cv/master/'
    var experienceFiles = [
      'mozilla.json',
      'bis.json',
      'ihs.json',
      'beazley.json',
      'maersk.json',
      'rwe.json',
      'keane.json',
      'visa.json',
      'charteris.json',
      'bt-london.json',
      'hpa.json',
      'atos.json',
      'conchango.json',
      'mcorp.json',
      'bt-exeter.json',
      'centrax.json',
      'devon.json',
      'txtnation.json'
    ];
    var experiences = [];
    for (var i = experienceFiles.length - 1; i >= 0; i--) {
      $http.get(cv_url + experienceFiles[i]).then(
        function(data) {
          experiences.push(data.data);
          if (experiences.length === experienceFiles.length) {
            experiences.sort(function(a,b) { return b.period.start.localeCompare(a.period.start); } );
            $scope.experiences = experiences;
          }
        }
      );
    }
  });
