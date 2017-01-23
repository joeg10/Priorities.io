(function () {
    //$.mobile.linkBindingEnabled = false;
    //$.mobile.hashListeningEnabled = false;
    var app = angular.module("taskApp", ['gridster', 'ngRoute', 'mobile-angular-ui.components']);

    //, 'ui.router'

    app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/tasks', {
            templateUrl: 'app/task.html'
            //controller: 'PhoneListCtrl'
        }).
        when('/edit', {
            templateUrl: 'app/editTask.html'
        }).
        otherwise({
            redirectTo: '/tasks'
        });
  }]);

    //app.config(function (routeProvider, $urlRouterProvider) {
    //    $urlRouterProvider.otherwise('/tasks');
    //    $stateProvider
    //        .state('tasks', {
    //            url: "/tasks",
    //            templateUrl: "/app/task.html"
    //        })
    //        .state('edit', {
    //            url: "/edit",
    //            templateUrl: "/app/editTask.html"
    //        })
    //});


    app.run(function () {

    });
})();
