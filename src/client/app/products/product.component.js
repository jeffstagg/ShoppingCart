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
        cart: '=',
        saveProducts: '&'
      }
    });

  function ProductController(
    $q,
    shoppingCartService,
    productsService) {
    var vm = this;
    vm.addToCart = addToCart;
    vm.rateProduct = rateProduct;
    vm.showRateProduct = false;

    init();

    function init() {
      vm.product.viewRating = productsService.getRating(vm.product);
    }

    function addToCart(quantity) {
      shoppingCartService.addProductToCart(vm.cart, vm.product, quantity);
    }

    function rateProduct(value) {
      productsService.rateProduct(vm.product, value);
      vm.saveProducts();
      vm.product.viewRating = productsService.getRating(vm.product);
    }
  }

})();
