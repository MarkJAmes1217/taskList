(function() {
    'use strict';

    angular
        .module('app.task')
        .controller('TaskController', TaskController);

    TaskController.$inject = ['logger'];
    /* @ngInject */
    function TaskController(logger) {
        var vm = this;
        vm.todoList = [];
        vm.doneList = [];
        vm.title = 'Task';
        vm.finishTask = finishTask;
        vm.returnToTask = returnToTask;
        vm.submitTask = submitTask;
        vm.taskFor = "";
        vm.taskInput = [];
        vm.createNewTask = createNewTask;
        vm.handleChange = handleChange;
        vm.errorReport = "";

        activate();

        function activate() {
            var todo = [];
            todo.push({
                title: "Create First"
            }, {
                title: "Create Second"
            });
            for(var x = 0; x < 5; x++){
                todo.push({
                    title: "Task "+x
                });
            }
            vm.todoList = todo;
            logger.info('Activated Task View');
        }

        function finishTask(index) {
            var task = vm.todoList[index];
            var doneList = vm.doneList;
            doneList.push(task);
            vm.doneList = doneList;
            var todo  = vm.todoList;
            todo.splice(index,1);
            vm.todoList = todo;
        }

        function returnToTask(index) {
            var doneList = vm.doneList;
            var task = vm.doneList[index];
            var todo = vm.todoList;
            // console.log(todo);
            todo.push(task);
            doneList.splice(index,1);
            vm.todoList = todo;
            vm.doneList = doneList;
        }

        function submitTask(){
            var taskFor = vm.taskFor;
            var title = vm.taskInput.taskTitle;
            
            var storage = taskFor == "Todo Task" ? vm.todoList:vm.doneList;
            var content = storage.filter(function (content){
                return content.title === title;
            });
            if(content.length > 0)
            {
                vm.errorReport = title+ " already exists in "+ taskFor +" list.";
            }
            else
            {
                taskFor == "Todo Task" ? vm.todoList.push({title: title}):vm.doneList.push({title:title});
                vm.taskFor = '';
                vm.taskInput = [];
            }
        }

        function createNewTask(task) {
            vm.taskFor = task;
            vm.taskInput = [];
        }

        function handleChange(e){
            var value = e.target.value;
            var name = e.target.name;

            vm.taskInput[name] = value;
        }
    }
})();