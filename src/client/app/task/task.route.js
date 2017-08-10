(function() {
  'use strict';

  angular
    .module('app.task')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'task',
        config: {
          url: '/task',
          templateUrl: 'app/task/task.html',
          controller: 'TaskController',
          controllerAs: 'vm',
          title: 'Task',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> task'
          }
        }
      }
    ];
  }
})();
