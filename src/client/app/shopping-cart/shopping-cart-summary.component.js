(function() {
  'use strict';

  angular
    .module('app.cart')
    .component('shoppingCartSummary', {
      templateUrl: 'app/shopping-cart/shopping-cart-summary.html',
      controller: ShoppingCartSummaryController,
      controllerAs: 'vm',
      bindings: {
        cart: '='
      }
    });

  function ShoppingCartSummaryController(
    $q,
    shoppingCartService,
    logger,
    $scope) {
    var vm = this;

    init();

    function init() {
    }
  }

})();
