'use strict';

/**
 * @ngdoc overview
 * @name grenadeApp
 * @description
 * # grenadeApp
 *
 * Main module of the application.
 */
angular
  .module('grenadeApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        activeRoute: 'home'
      })
      .when('/objective', {
        templateUrl: 'views/objective.html',
        controller: 'ObjectiveCtrl',
        activeRoute: 'objective'
      })
      .when('/experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl',
        activeRoute: 'experience'
      })
      .when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl',
        activeRoute: 'education'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        activeRoute: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
