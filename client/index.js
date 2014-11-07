(function(){
  'use strict';
  var index = angular.module('portfolio', ['ngRoute']);

  //Angular Routes
  index.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider
    .when('/', {templateUrl:'home/home.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();
