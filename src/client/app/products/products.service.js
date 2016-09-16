(function() {
  'use strict';

  angular
    .module('app.products')
    .factory('productsService', ProductsService);

  function ProductsService($q) {

    var allProducts = [
      {
        name: 'OSP',
        manufacturer: 'Atair',
        price: 1599.99,
        rating: 3
      },
      {
        name: 'Troll',
        manufacturer: 'Atair',
        price: 1399.99,
        rating: 3
      },
      {
        name: 'Ace',
        manufacturer: 'Asylum',
        price: 1399.99,
        rating: 3
      },
      {
        name: 'Blackjack',
        manufacturer: 'Asylum',
        price: 1599.99,
        rating: 3
      },
      {
        name: 'Outlaw',
        manufacturer: 'Squirrel',
        price: 1749.00,
        rating: 3
      },
      {
        name: 'Flik',
        manufacturer: 'Apex',
        price: 1499.99,
        rating: 3
      }
    ];

    return {
      getProducts: getProducts
    };

    function getProducts() {
      var deferred = $q.defer();

      deferred.resolve(allProducts);

      return deferred.promise;
    }
  }
})();
