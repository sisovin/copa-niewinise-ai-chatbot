import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

export const triggerEvent = async (channel: string, event: string, data: any) => {
  try {
    await pusher.trigger(channel, event, data);
  } catch (error) {
    console.error('Error triggering Pusher event:', error);
    throw new Error('Failed to trigger Pusher event');
  }
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
