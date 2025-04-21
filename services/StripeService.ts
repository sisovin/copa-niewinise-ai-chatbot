import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
});

export const createCustomer = async (email: string, name: string) => {
  const customer = await stripe.customers.create({
    email,
    name,
  });
  return customer;
};

export const createSubscription = async (customerId: string, priceId: string) => {
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    expand: ['latest_invoice.payment_intent'],
  });
  return subscription;
};

export const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      break;
    case 'invoice.payment_succeeded':
      const invoice = event.data.object;
      console.log(`Invoice ${invoice.id} was paid!`);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
};

export const getSubscriptionPlanDetails = async (plan: string) => {
  const plans = {
    basic: {
      name: 'Basic',
      price: 10,
      features: ['Feature 1', 'Feature 2'],
    },
    premium: {
      name: 'Premium',
      price: 20,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    enterprise: {
      name: 'Enterprise',
      price: 30,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
  };

  return plans[plan] || null;
};
