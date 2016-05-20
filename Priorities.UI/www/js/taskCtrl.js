var app = angular.module("taskApp", ['gridster', 'xeditable']);

app.run(function (editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

//angular.module('taskApp', ['gridster', 'xeditable'])
app
  .controller('taskCtrl', function ($scope, $log) {
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
          $scope.selectedTask = selectedTask;
          $scope.open('lg');
      }


      ////modal section
      //$scope.open = function (size) {

      //    var modalInstance = $uibModal.open({
      //        animation: $scope.animationsEnabled,
      //        templateUrl: 'editModal.html',
      //        controller: 'editModalCtrl',
      //        size: size,
      //        resolve: {
      //            selectedTask: function () {
      //                return $scope.selectedTask;
      //            }
      //        }
      //    });

      //    modalInstance.result.then(function (selectedItem) {
      //       // vm.selected = selectedItem;
      //    }, function () {
      //        $log.info('Modal dismissed at: ' + new Date());
      //    });
      //};

  });

//angular.module('taskApp').controller('editModalCtrl', function ($scope, $uibModalInstance, selectedTask) {

//    $scope.selectedTask = selectedTask;
//    //$scope.selected = {
//    //    item: $scope.items[0]
//    //};

//    $scope.ok = function () {
//        $uibModalInstance.close(selectedTask);
//    };

//    $scope.cancel = function () {
//        $uibModalInstance.dismiss('cancel');
//    };
//});