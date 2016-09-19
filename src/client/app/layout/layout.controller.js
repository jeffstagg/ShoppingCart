(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('LayoutController', LayoutController);

  LayoutController.$inject = ['$q', 'shoppingCartService', 'productsService', 'logger'];
  /* @ngInject */
  function LayoutController(
    $q,
    shoppingCartService,
    productsService,
    logger) {
    var vm = this;

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
