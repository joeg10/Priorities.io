angular.module('taskApp', [])
  .controller('taskCtrl', function () {
      var vm = this;
      vm.addTaskText = '';
      vm.display = 'list';

      vm.task = [
        { "task_name": "Fix driveway", "due_date": "1/1/2016" },
        { "task_name": "Replace roof", "due_date": "1/1/2016" },
        { "task_name": "Fix dryer", "due_date": "1/1/2016" },
        { "task_name": "Tear out deck", "due_date": "1/15/2016" },
        { "task_name": "Add electricity to garage", "due_date": "1/3/2016" }
      ];
      vm.addTask = function () {
          if (vm.addTaskText !== '') {
              vm.task.push({ "task_name": vm.addTaskText });
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
  });