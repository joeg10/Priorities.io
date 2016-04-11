angular.module('taskApp', [])
  .controller('taskCtrl', function () {
      var vm = this;
      vm.addTaskText = '';
      vm.task = [
        { "tasktext": "Fix driveway" },
        { "tasktext": "Replace roof" },
        { "tasktext": "Fix dryer" },
        { "tasktext": "Tear out deck" },
        { "tasktext": "Add electricity to garage" }
      ];
      vm.addTask = function () {
          if (vm.addTaskText !== '') {
              vm.task.push({ "tasktext": vm.addTaskText });
              vm.addTaskText = '';
          }
      }
      vm.deleteTask = function (task) {
          vm.task.splice(vm.task.indexOf(task), 1);
      }
  });