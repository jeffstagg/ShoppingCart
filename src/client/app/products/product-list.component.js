(function() {
  'use strict';

  angular
    .module('app.products')
    .component('productList', {
      templateUrl: 'app/products/product-list.html',
      controller: ProductListController,
      controllerAs: 'vm',
      bindings: {
        cart: '='
      }
    });

  function ProductListController(
    $q,
    productsService,
    logger) {
    var vm = this;
    vm.products = [];
    vm.saveProducts = saveProducts;

    init();

    function init() {
      productsService.getProducts().then(
        function(products) {
          vm.products = products;
        }, function(error) {
          logger.error(error);
        });
    }

    function saveProducts() {
      productsService.saveProducts(vm.products);
    }
  }

})();
