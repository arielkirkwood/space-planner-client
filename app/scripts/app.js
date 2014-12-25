'use strict';

/**
 * @ngdoc overview
 * @name spacePlannerClientApp
 * @description
 * # spacePlannerClientApp
 *
 * Main module of the application.
 */
angular
  .module('spacePlannerClientApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
