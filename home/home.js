/* jshint camelcase: false*/
(function(){
  'use strict';

  var home = angular.module('portfolio');

  home.controller('HomeCtrl', ['$scope', function($scope){
    $scope.title = 'Home Page';

    $scope.hideAbout = true;
    $scope.hidePortfolio =true;
    $scope.hideContact = true;
    $scope.hideMain = false;

    $scope.toggleHome = function(){
      $scope.hideAbout = true;
      $scope.hidePortfolio = true;
      $scope.hideContact = true;
      $scope.hideMain = false;
    };

    $scope.toggleAbout = function(){
      $scope.hideAbout = false;
      $scope.hidePortfolio = true;
      $scope.hideContact = true;
      $scope.hideMain = true;
    };

    $scope.togglePortfolio = function(){
      $scope.hideAbout = true;
      $scope.hidePortfolio = false;
      $scope.hideContact = true;
      $scope.hideMain = true;
    };

    $scope.toggleContact = function(){
      $scope.hideAbout = true;
      $scope.hidePortfolio = true;
      $scope.hideContact = false;
      $scope.hideMain = true;
    };

  }]);
})();
