// CallZap Paddle Checkout
const PADDLE_PRICES = {
  basic: 'pri_01kwxkpzx0j0mztgejm72vw9nx',
  pro: 'pri_01kwxky4wgbefspqr4h2ezzpnq'
};

function openCheckout(plan) {
  Paddle.Checkout.open({
    items: [{
      priceId: PADDLE_PRICES[plan],
      quantity: 1
    }]
  });
}