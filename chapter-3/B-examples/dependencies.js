var Stripe = require('stripe');
var fx = require('./fx');

module.exports = function(wagner) {
  var stripe = Stripe('sk_test_00I2QBlHUmmpOyZkZPOm0Byp');

  wagner.factory('Stripe', function() {
    return stripe;
  });

  wagner.factory('fx', fx);
};
