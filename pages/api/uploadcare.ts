import { NextApiRequest, NextApiResponse } from 'next';
import { UploadClient } from '@uploadcare/upload-client';

const client = new UploadClient({ publicKey: process.env.UPLOADCARE_PUBLIC_KEY });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const file = req.body.file;
      const result = await client.uploadFile(file);
      res.status(200).json({ fileUrl: result.cdnUrl });
    } catch (error) {
      res.status(500).json({ error: 'File upload failed' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
