'use strict';

angular.module('grenadeApp')
  .controller('NavCtrl',
  function ($scope, $location, $route) {
    $scope.isActive = function(route) {
        return route && $route && $route.current && route === $route.current.activeRoute;
    };
  }
);
