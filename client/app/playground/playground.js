'use strict';

angular.module('agfOpenApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('playground', {
        url: '/playground',
        templateUrl: 'app/playground/playground.html',
        controller: 'PlaygroundCtrl'
      });
  });
