(function() {
  'use strict';

  angular
    .module('app.products')
    .component('productList', {
      templateUrl: 'app/products/product-list.html',
      controller: ProductListController,
      controllerAs: 'vm',
      bindings: {
        product: '='
      }
    });

  function ProductListController() {
    var vm = this;

    init();

    function init() {

    }
  }

})();
