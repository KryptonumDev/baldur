const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const api = new WooCommerceRestApi({
    url: `${process.env.WP_URL}/`,
    consumerKey: process.env.WC_KEY,
    consumerSecret: process.env.WC_SECRET,
    version: 'wc/v3'
});

export default async function handler(req, res) {
  api.put(`orders/${req.body.orderNumber}`, {
      status: 'cancelled'
  })
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.cancel(req.body.intent);

  res.send({
    paymentIntent: paymentIntent
  });
};