angular.module('texteditor',  ['ui.router', 'ui.ace'])
  .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider



      $urlRouterProvider
          .otherwise('/');
  });
