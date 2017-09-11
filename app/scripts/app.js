'use strict';

/**
 * @ngdoc overview
 * @name proyectoImagenApp
 * @description
 * # proyectoImagenApp
 *
 * Main module of the application.
 */
angular
  .module('proyectoImagenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/imagenes', {
        templateUrl: 'views/imagenes.html',
        controller: 'ImagenesCtrl',
        controllerAs: 'imagenes'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
