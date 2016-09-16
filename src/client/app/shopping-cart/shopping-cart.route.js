(function() {
  'use strict';

  angular
    .module('app.cart')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'cart',
        config: {
          url: '/',
          templateUrl: 'app/shopping-cart/shopping-cart.html',
          controller: 'ShoppingCartController',
          controllerAs: 'vm',
          title: 'Cart'
        }
      }
    ];
  }
})();
