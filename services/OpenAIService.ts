import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateChatbotResponse = async (prompt: string) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating chatbot response:', error);
    throw new Error('Failed to generate chatbot response');
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
