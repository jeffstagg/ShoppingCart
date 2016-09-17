(function() {
  'use strict';

  angular
    .module('app.cart')
    .factory('shoppingCartService', ShoppingCartService);

  function ShoppingCartService($q, config) {

    return {
      getShoppingCart: getShoppingCart,
      addProductToCart: addProductToCart
    };

    function getShoppingCart() {
      var deferred = $q.defer();

      //return empty array if no cart yet
      var cart = sessionStorage.getItem(config.shoppingCartStorageKey);
      deferred.resolve(cart ? cart : []);

      return deferred.promise;
    }

    function addProductToCart(cart, product, quantity) {
      cart.products.push(
        {
          product: product,
          quantity: quantity
        });
      updateCartTotals(cart);
      sessionStorage.setItem(config.shoppingCartStorageKey, cart);
    }

    function updateCartTotals(cart) {
      var subtotal = 0;
      cart.products.forEach(function(product) {
        subtotal += product.product.price * product.quantity;
      });
      cart.subtotal = subtotal;
    }

  }
})();
