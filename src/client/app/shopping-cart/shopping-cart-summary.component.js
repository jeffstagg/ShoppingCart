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
    $uibModal) {
    var vm = this;
    vm.openShippingModal = openShippingModal;

    init();

    function init() {
      shoppingCartService.getShippingMethods().then(function(methods) {
        vm.shippingMethods = methods;
      });
    }

    function openShippingModal() {
      $uibModal.open({
        component: 'shippingMethodModal',
        resolve: {
          modalData: function() {
            return vm.selectedShippingMethod;
          }
        }
      }).result.then(function(result) {
        shoppingCartService.setShippingMethod(vm.cart, result);
      }, function(error) {
        logger.error('No shipping method chosen.');
      });
    }
  }

})();
