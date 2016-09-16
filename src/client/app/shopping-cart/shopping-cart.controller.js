(function() {
  'use strict';

  angular
    .module('app.cart')
    .controller('ShoppingCartController', ShoppingCartController);

  ShoppingCartController.$inject = ['$q', 'shoppingCartService', 'logger'];
  /* @ngInject */
  function ShoppingCartController($q, shoppingCartService, logger) {
    var vm = this;
    vm.products = [];

    init();

    function init() {
      shoppingCartService.getShoppingCart().then(
        function(cart) {
          vm.cart = cart;
        }, function(error) {
          logger.error(error);
        });
    }
  }
})();
