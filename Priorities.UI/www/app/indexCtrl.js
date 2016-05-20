(function () {



    var app = angular.module("taskApp", ['gridster', 'ui.router']);



    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/test');
        $stateProvider
            .state('edit', {
                url: "/edit",
                templateUrl: "app/editTask.html",
                controller: 'editTaskCtrl'               
            })

      
    });

    //angular.module('taskApp', ['gridster', 'xeditable'])
    app.controller('indexCtrl', function ($scope, $log, $state) {
        var vm = this;
        vm.addTaskText = '';
        vm.display = 'grid';
        $scope.animationsEnabled = true;

        $scope.gridsterOptions = {
            margins: [20, 20],
            columns: 4,
            draggable: {
                handle: 'h3'
            }
        };

        vm.task = [
          { "title": "Fix driveway", "description": "task description", "create_date": "1/1/2016", "due_date": "1/1/2016", "start_date": "1/1/2016", "complete_date": "1/1/2016", "priority": 1, status: "queued" },
          { "title": "Replace roof", "description": "task description", "create_date": "1/1/2016", "due_date": "1/1/2016", "start_date": "1/1/2016", "complete_date": "1/1/2016", "priority": 2, status: "queued" },
          { "title": "Fix dryer", "description": "task description", "create_date": "1/1/2016", "due_date": "1/1/2016", "start_date": "1/1/2016", "complete_date": "1/1/2016", "priority": 3, status: "queued" },
          { "title": "Tear out deck", "description": "task description", "create_date": "1/1/2016", "due_date": "1/1/2016", "start_date": "1/1/2016", "complete_date": "1/1/2016", "priority": 4, status: "queued" },
          { "title": "Add electricity to garage", "description": "task description", "create_date": "1/1/2016", "due_date": "1/1/2016", "start_date": "1/1/2016", "complete_date": "1/1/2016", "priority": 5, status: "queued" }
        ];


        vm.addTask = function () {
            if (vm.addTaskText !== '') {
                vm.task.push({ "title": vm.addTaskText });
                vm.addTaskText = '';
            }
        }
        vm.deleteTask = function (task) {
            vm.task.splice(vm.task.indexOf(task), 1);
        }

        vm.changeDisplay = function () {
            if (vm.display === 'list') {
                vm.display = 'grid';
            }
            else {
                vm.display = 'list';
            }
        }

        vm.editItem = function (selectedTask) {
            //$scope.selectedTask = selectedTask;
            //$scope.open('lg');
            $state.go('edit')
        }



    });


    app.run(function () {
        //editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });
})();
