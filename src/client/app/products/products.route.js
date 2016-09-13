(function() {
  'use strict';

  angular
    .module('app.products')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'products',
        config: {
          url: '/',
          templateUrl: 'app/products/list.html',
          controller: 'ProductsController',
          controllerAs: 'vm',
          title: 'Products',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Products'
          }
        }
      }
    ];
  }
})();
