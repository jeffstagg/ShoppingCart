(function() {
  var ProductModel = function() {
    this.name = null;
    this.price = 0;
    this.rating = 3;
  };

  var module = angular.module('app.models');
  module.value('ProductModel', ProductModel);
})();
