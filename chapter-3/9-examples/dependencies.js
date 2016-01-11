var Stripe = require('stripe');

module.exports = function(wagner) {
  var stripe = Stripe('sk_test_00I2QBlHUmmpOyZkZPOm0Byp');

  wagner.factory('Stripe', function() {
    return stripe;
  });

  return {
    Stripe: stripe
  };
};
