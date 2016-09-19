(function() {
  var ProductModel = function() {
    this.name = null;
    this.manufacturer = null;
    this.price = 0;
    this.ratings = [];
  };

  var module = angular.module('app.models');
  module.value('ProductModel', ProductModel);
})();
