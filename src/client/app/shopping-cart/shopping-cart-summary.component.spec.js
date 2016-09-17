/* jshint -W117, -W030 */
describe('ShoppingCartSummaryComponent', function() {
  var mockCart = {
    products: [],
    shippingMethod: {},
    subtotal: 0,
    total: 0
  };
  var element;
  var scope;

  beforeEach(function() {
    bard.appModule('app.cart', 'app.core', 'app.models');
    bard.inject('$controller', '$log', '$q', '$rootScope', 'shoppingCartService');
    sinon.stub(shoppingCartService, 'getShoppingCart')
      .returns($q.when(mockCart));
  });

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<shopping-cart-summary></shopping-cart-summary>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  bard.verifyNoOutstandingHttpRequests();

  it('should be created successfully', function() {
    var controller = element.controller('shoppingCartSummaryComponent');
    expect(controller).to.be.defined;
  });

  describe('after activate', function() {
    // it('should display the subtotal of items in cart', function() {
    //   shoppingCartService.addProductToCart(
    //     {
    //       title: 'Mock Product',
    //       price: 19.99
    //     }, 2);
    //   var subtotal = (19.99 * 2);
    //   expect(controller.cart.subtotal).to.equal(subtotal);
    // });

    // it('should have logged "Activated"', function() {
    //   expect($log.info.logs).to.match(/Activated/);
    // });

    // it('should have news', function() {
    //   expect(controller.news).to.not.be.empty;
    // });

    // it('should have at least 1 person', function() {
    //   expect(controller.people).to.have.length.above(0);
    // });

    // it('should have people count of 5', function() {
    //   expect(controller.people).to.have.length(7);
    // });
  });
});
