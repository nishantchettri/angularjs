app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      views: {
        'mainContent': {
          templateUrl: 'app/menu/menu.template.html',
          controller: 'MenuCtrl'
        }
      }
    })
});
