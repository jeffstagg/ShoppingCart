(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('LayoutController', LayoutController);

  LayoutController.$inject = ['$q', 'shoppingCartService', 'logger'];
  /* @ngInject */
  function LayoutController($q, shoppingCartService, logger) {
    var vm = this;

    init();

    function init() {
      shoppingCartService.getShoppingCart().then(
        function(cart) {
          vm.cart = cart;
        }, function(error) {
          logger.error(error);
        });
    }
  }
})();
