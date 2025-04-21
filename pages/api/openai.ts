import { NextApiRequest, NextApiResponse } from 'next';
import { generateChatbotResponse } from '../../services/OpenAIService';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
      const response = await generateChatbotResponse(prompt);
      return res.status(200).json({ response });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to generate chatbot response' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default handler;
