(function() {
  'use strict';

  angular
    .module('app.products')
    .component('product', {
      templateUrl: 'app/products/product.html',
      controller: ProductController,
      controllerAs: 'vm',
      bindings: {
        product: '='
      }
    });

  function ProductController() {
    var vm = this;

    init();

    function init() {

    }
  }

})();
