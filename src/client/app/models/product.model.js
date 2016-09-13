(function() {
    var ProductModel = function() {
        this.id = null;
        this.title = null;
        this.price = 0;
        this.rating = 3;
    };
 
    var module = angular.module('app.models');
    module.value('ProductModel', ProductModel);
})();