// /pages/api/chat.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini", // or "gpt-4o" if you want the full model
        messages: [{ role: "user", content: prompt }],
      });

      const reply = completion.choices[0].message.content;
      res.status(200).json({ reply });
    } catch (error) {
      console.error("Chat API error:", error);
      res.status(500).json({ error: error.message || "Something went wrong" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
