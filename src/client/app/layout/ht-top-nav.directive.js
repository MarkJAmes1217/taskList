(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('htTopNav', htTopNav);

  /* @ngInject */
  function htTopNav() {
    var directive = {
      bindToController: true,
      controller: TopNavController,
      controllerAs: 'vm',
      restrict: 'EA',
      scope: {
        'navline': '='
      },
      templateUrl: 'app/layout/ht-top-nav.html'
    };

    TopNavController.$inject = ['$scope','$state', 'routerHelper'];

    /* @ngInject */
    function TopNavController($scope,$state, routerHelper) {
      var vm = this;
      var states = routerHelper.getStates();
      $scope.isCollapsed = true;
    }

    return directive;
  }
})();
