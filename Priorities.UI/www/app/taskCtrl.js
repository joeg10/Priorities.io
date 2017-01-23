(function () {



    var app = angular.module("taskApp");



   
    //angular.module('taskApp', ['gridster', 'xeditable'])
    app.controller('taskCtrl', function ($scope, $log) {
        //var vm = this;
        $scope.addTaskText = '';
        $scope.display = 'grid';
        $scope.animationsEnabled = true;

        $scope.gridsterOptions = {
            margins: [20, 20],
            columns: 4,
            draggable: {
                handle: 'h3'
            }
        };

        $scope.task = [
          { id: 1, "title": "Fix driveway", "description": "task description", "create_date": "1/1/2016", "due_date": "1/1/2016", "start_date": "1/1/2016", "complete_date": "1/1/2016", "priority": 1, status: "queued" },
          { id: 2, "title": "Replace roof", "description": "task description", "create_date": "1/1/2016", "due_date": "1/1/2016", "start_date": "1/1/2016", "complete_date": "1/1/2016", "priority": 2, status: "queued" },
          { id: 3, "title": "Fix dryer", "description": "task description", "create_date": "1/1/2016", "due_date": "1/1/2016", "start_date": "1/1/2016", "complete_date": "1/1/2016", "priority": 3, status: "queued" },
          { id: 4, "title": "Tear out deck", "description": "task description", "create_date": "1/1/2016", "due_date": "1/1/2016", "start_date": "1/1/2016", "complete_date": "1/1/2016", "priority": 4, status: "queued" },
          { id: 5, "title": "Add electricity to garage", "description": "task description", "create_date": "1/1/2016", "due_date": "1/1/2016", "start_date": "1/1/2016", "complete_date": "1/1/2016", "priority": 5, status: "queued" }
        ];


        $scope.addTask = function () {
            if ($scope.addTaskText !== '') {
                $scope.task.push({ "title": $scope.addTaskText });
                $scope.addTaskText = '';
            }
        }
        $scope.deleteTask = function (task) {
            $scope.task.splice($scope.task.indexOf(task), 1);
        }

        $scope.changeDisplay = function () {
            if ($scope.display === 'list') {
                $scope.display = 'grid';
            }
            else {
                $scope.display = 'list';
            }
        }

        $scope.editItem = function (selectedTask) {
            //$scope.selectedTask = selectedTask;
            //$scope.open('lg');
            //$state.go('edit')
        }




    });

})();
