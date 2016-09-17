/* jshint -W117, -W030 */
describe('ShoppingCartService', function() {

  var mockCart = {};

  var mockProduct = {
    title: 'Mock Product',
    price: 1.99,
    rating: 3
  };

  beforeEach(function() {
    bard.appModule('app.cart', 'app.core', 'app.models', 'app.config');
    bard.inject('$log', '$q', 'shoppingCartService');
    mockCart = {
      products: [],
      shippingMethod: {},
      subtotal: 0,
      total: 0
    };
  });

  bard.verifyNoOutstandingHttpRequests();

  it ('should add product to shopping cart', function() {
    shoppingCartService.addProductToCart(mockCart, mockProduct, 1);
    expect(mockCart.products.length).to.equal(1);
  });

  it('should update subtotal when adding product to shopping cart', function() {
    shoppingCartService.addProductToCart(mockCart, mockProduct, 2);
    expect(mockCart.subtotal).to.equal(1.99 * 2);
  });
});
