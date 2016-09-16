(function() {
  'use strict';

  angular
    .module('app.products')
    .component('productList', {
      templateUrl: 'app/products/product-list.html',
      controller: ProductListController,
      controllerAs: 'vm'
    });

  // ProductsController.$inject = ['$q', 'productsService', 'logger'];
  // /* @ngInject */
  function ProductListController($q, productsService, logger) {
    var vm = this;
    vm.products = [];

    init();

    function init() {
      productsService.getProducts().then(
        function(products) {
          vm.products = products;
        }, function(error) {
          logger.error(error);
        });
    }
  }

})();
