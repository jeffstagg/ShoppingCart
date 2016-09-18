(function() {
  'use strict';

  angular
    .module('app.products')
    .component('product', {
      templateUrl: 'app/products/product.html',
      controller: ProductController,
      controllerAs: 'vm',
      bindings: {
        product: '=',
        cart: '='
      }
    });

  function ProductController($q, shoppingCartService) {
    var vm = this;
    vm.addToCart = addToCart;

    init();

    function init() {

    }

    function addToCart(quantity) {
      shoppingCartService.addProductToCart(vm.cart, vm.product, quantity);
    }
  }

})();
