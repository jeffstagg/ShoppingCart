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
          url: '/products',
          templateUrl: 'app/products/product-list.html',
          controller: 'ProductsController',
          controllerAs: 'vm',
          title: 'Products'
        }
      }
    ];
  }
})();
