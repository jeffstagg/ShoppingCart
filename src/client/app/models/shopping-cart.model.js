(function() {
  var ShoppingCartModel = function() {
    this.products = [];
    this.shippingMethod = {};
    this.subtotal = 0;
    this.total = 0;
  };

  var module = angular.module('app.models');
  module.value('ShoppingCartModel', ShoppingCartModel);
})();
