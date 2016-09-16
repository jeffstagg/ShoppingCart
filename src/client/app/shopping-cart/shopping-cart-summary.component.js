(function() {
  'use strict';

  angular
    .module('app.cart')
    .component('shoppingCartSummary', {
      templateUrl: 'app/shopping-cart/shopping-cart-summary.html',
      controller: ShoppingCartSummaryController,
      controllerAs: 'vm'
    });

  function ShoppingCartSummaryController(
    $q,
    shoppingCartService,
    ShoppingCartModel,
    logger) {
    var vm = this;
    vm.cart = new ShoppingCartModel();

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
