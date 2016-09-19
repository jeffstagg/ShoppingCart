(function() {
  'use strict';

  angular
    .module('app.products')
    .factory('productsService', ProductsService);

  function ProductsService(
    $q,
    config) {

    var allProducts = [
      {
        name: 'OSP',
        manufacturer: 'Atair',
        price: 1599.99,
        ratings: []
      },
      {
        name: 'Troll',
        manufacturer: 'Atair',
        price: 1399.99,
        ratings: []
      },
      {
        name: 'Ace',
        manufacturer: 'Asylum',
        price: 1399.99,
        ratings: []
      },
      {
        name: 'Blackjack',
        manufacturer: 'Asylum',
        price: 1599.99,
        ratings: []
      },
      {
        name: 'Outlaw',
        manufacturer: 'Squirrel',
        price: 1749.00,
        ratings: []
      },
      {
        name: 'Flik',
        manufacturer: 'Apex',
        price: 1499.99,
        ratings: []
      }
    ];

    return {
      getProducts: getProducts,
      rateProduct: rateProduct,
      getRating: getRating,
      saveProducts: saveProducts
    };

    function getProducts() {
      var deferred = $q.defer();

      var products = JSON.parse(sessionStorage.getItem(config.productsStorageKey));
      deferred.resolve(products ? products : allProducts);

      deferred.resolve(products);

      return deferred.promise;
    }

    function rateProduct(product, rating) {
      var deferred = $q.defer();

      product.ratings.push(parseInt(rating));
      deferred.resolve(true);

      return deferred.promise;
    }

    function getRating(product) {
      if (product.ratings.length > 0) {
        var sum = product.ratings.reduce(function(sum, num) {
          return sum + num;
        }, 0);
        return parseFloat((sum / product.ratings.length).toFixed(2));
      } else {
        return 3; //base rating of 3
      }
    }

    function saveProducts(products) {
      sessionStorage.setItem(config.productsStorageKey, JSON.stringify(products));
    }
  }
})();
