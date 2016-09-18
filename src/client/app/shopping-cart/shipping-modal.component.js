(function() {
  'use strict';

  angular
    .module('app.cart')
    .component('shippingMethodModal', {
      templateUrl: 'app/shopping-cart/shipping-modal.html',
      controller: ShippingMethodModalController,
      controllerAs: 'vm',
      bindings: {
        cart: '=',
        modalInstance: '<',
        resolve: '<'
      }
    });

  function ShippingMethodModalController(
    $q,
    shoppingCartService,
    logger,
    $uibModal) {
    var vm = this;

    vm.modalData = vm.resolve.modalData;
    vm.handleClose = handleClose;
    vm.handleDismiss = handleDismiss;

    init();

    function init() {
      shoppingCartService.getShippingMethods().then(function(methods) {
        vm.shippingMethods = methods;
      });
    }

    function handleClose() {
      vm.modalInstance.close(vm.selectedShippingMethod);
    }

    function handleDismiss() {
      vm.modalInstance.dismiss('cancel');
    }
  }

})();
