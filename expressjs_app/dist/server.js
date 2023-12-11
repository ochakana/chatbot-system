"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const openai_1 = __importDefault(require("openai"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
const port = process.env.PORT || 5000;
app.post("/chatbot", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userMessage = req.body.message;
    console.log("User message:", userMessage);
    try {
        if (!userMessage) {
            throw new Error("No message was provided");
        }
        const response = yield openai.chat.completions
            .create({
            messages: [{ role: "user", content: userMessage }],
            model: "gpt-3.5-turbo",
            temperature: 0.7,
            max_tokens: 128,
            top_p: 1,
        })
            .asResponse();
        // 応答の型アサーションを使用
        const jsonResponse = (yield response.json());
        console.log("Response:", jsonResponse);
        if (!jsonResponse.choices || jsonResponse.choices.length === 0) {
            throw new Error("No choices in response");
        }
        const completion = jsonResponse.choices[0].message.content.trim();
        res.status(200).json({ success: true, message: completion });
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "An error occurred" });
    }
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
