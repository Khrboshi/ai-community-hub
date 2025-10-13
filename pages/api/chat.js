import { createChat } from '@vercel/ai';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body;
    const response = await createChat({ prompt });
    res.status(200).json(response);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
