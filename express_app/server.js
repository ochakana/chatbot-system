import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const port = process.env.PORT || 5000;

app.post("/chatbot", async (req, res) => {
  const userMessage = req.body.prompt;
  console.error("User message:", userMessage);
  try {
    if (!userMessage) {
      throw new Error("No prompt was provided");
    }
    const response = await openai.chat.completions
      .create({
        messages: [{ role: "user", content: userMessage }],
        model: "gpt-3.5-turbo",
      })
      .asResponse();

    const completion = response.data.choices[0].text.trim();
    res.status(200).json({ success: true, message: completion });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
