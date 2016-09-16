(function() {
  'use strict';

  angular
    .module('app.cart')
    .factory('shoppingCartService', ShoppingCartService);

  function ShoppingCartService($q, config) {

    return {
      getShoppingCart: getShoppingCart
    };

    function getShoppingCart() {
      var deferred = $q.defer();

      //return empty array if no cart yet
      var cart = sessionStorage.getItem(config.shoppingCartStorageKey);
      deferred.resolve(cart ? cart : []);

      return deferred.promise;
    }

  }
})();
