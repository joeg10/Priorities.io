(function () {

    var app = angular.module("taskApp", ['gridster', 'ui.router']);



    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/tasks');
        $stateProvider
            .state('tasks', {
                url: "/tasks",
                templateUrl: "/app/task.html"
            })
            .state('edit', {
                url: "/edit",
                templateUrl: "/app/editTask.html"
            })
    });


    app.run(function () {

    });
})();
