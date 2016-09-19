(function() {
  'use strict';

  angular
    .module('app.cart')
    .factory('shoppingCartService', ShoppingCartService);

  function ShoppingCartService($q, config, ShoppingCartModel) {

    return {
      getShoppingCart: getShoppingCart,
      addProductToCart: addProductToCart,
      getShippingMethods: getShippingMethods,
      setShippingMethod: setShippingMethod
    };

    function getShoppingCart() {
      var deferred = $q.defer();

      //return empty array if no cart yet
      var cart = JSON.parse(sessionStorage.getItem(config.shoppingCartStorageKey));
      deferred.resolve(cart ? cart : new ShoppingCartModel());

      return deferred.promise;
    }

    function addProductToCart(cart, product, quantity) {
      cart.products.push(
        {
          product: product,
          quantity: quantity
        });
      updateCartTotals(cart);
      sessionStorage.setItem(config.shoppingCartStorageKey, JSON.stringify(cart));
    }

    function updateCartTotals(cart) {
      var subtotal = 0;
      cart.products.forEach(function(product) {
        subtotal += parseFloat((product.product.price * product.quantity).toFixed(2));
      });
      cart.subtotal = parseFloat(subtotal.toFixed(2));

      cart.total = cart.shippingMethod.shippingCost ?
        parseFloat((cart.subtotal + cart.shippingMethod.shippingCost).toFixed(2)) :
        parseFloat(cart.subtotal.toFixed(2));
    }

    function getShippingMethods() {
      var deferred = $q.defer();

      deferred.resolve([
        {
          shippingTitle: 'Next-Day Air',
          shippingCost: 14.99
        },
        {
          shippingTitle: '2-Day Rush',
          shippingCost: 7.99
        },
        {
          shippingTitle: 'Standard 5-Day',
          shippingCost: 2.99
        }
      ]);

      return deferred.promise;
    }

    function setShippingMethod(cart, method) {
      cart.shippingMethod = method;
      updateCartTotals(cart);
    }

  }
})();
