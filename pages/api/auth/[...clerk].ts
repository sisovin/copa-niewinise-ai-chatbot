import { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from '@clerk/nextjs/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Authenticated' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default withAuth(handler);
