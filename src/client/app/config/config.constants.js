(function() {
  'use strict';

  angular
    .module('app.config')
    .constant('config', {
      appTitle: 'ShoppingCart',

      // exception handler settings
      appErrorPrefix: '[ShoppingCart Error]',

      // storage keys
      shoppingCartStorageKey: 'SC-shoppingCart',
      productsStorageKey: 'SC-products',

      // logger settings
      logToConsole: true,
      logToServer: false,
      consoleLogLevel: 'info',
      serverLogLevel: 'warn',
      maxFileSize: 2097152,
      sessionStoragePrefix: ''
    });
})();
