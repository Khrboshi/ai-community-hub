import { createChat } from '@vercel/ai';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body;
    try {
      const response = await createChat({ prompt });
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
