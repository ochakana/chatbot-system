// const express = require('express');
// const app = express();
// const port = 5000;

// app.get('/', (req, res) => {
//   res.send('Hello World from Express.js!');
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());
app.use(cors());

const OPENAI_API_KEY = "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";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

app.post("/chatbot", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [],
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1,
    });

    const botResponse = response.data.choices[0].text.trim();
    res.json({ message: botResponse });
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    res.status(500).json({ message: "Error communicating with OpenAI" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});