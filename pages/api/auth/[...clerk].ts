import { NextApiRequest, NextApiResponse } from 'next';
import { withClerkMiddleware } from '@clerk/nextjs/server';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Clerk authentication route' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default withClerkMiddleware(handler);
