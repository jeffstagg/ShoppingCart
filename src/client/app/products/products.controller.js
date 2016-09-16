(function() {
  'use strict';

  angular
    .module('app.products')
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['$q', 'productsService', 'logger'];
  /* @ngInject */
  function ProductsController($q, productsService, logger) {
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
