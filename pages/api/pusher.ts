import { NextApiRequest, NextApiResponse } from 'next';
import { triggerEvent } from '../../services/PusherService';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { channel, event, data } = req.body;

    try {
      await triggerEvent(channel, event, data);
      res.status(200).json({ message: 'Event triggered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to trigger event' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
