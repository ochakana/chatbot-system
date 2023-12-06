import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello my friend",
      sentTime: "just now",
      sender: "Joe",
    },
  ]);

  const handleSend = async (text: string) => {
    // ユーザーのメッセージを追加
    const newMessage = {
      message: text,
      sentTime: "just now",
      sender: "numamura",
    };
    setMessages([...messages, newMessage]);

    // ChatBot.tsx の handleSend 関数内

    // OpenAIにリクエストを送信
    try {
      const response = await fetch("http://localhost:5000/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: text }), // 'message' を 'prompt' に変更
      });

      const data = await response.json();
      // OpenAIの返答を追加
      setMessages((messages) => [
        ...messages,
        { message: data.message, sentTime: "just now", sender: "Bot" },
      ]);
    } catch (error) {
      console.error("Error fetching response from OpenAI:", error);
    }
  };

  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages.map((msg, index) => (
              <Message
                key={index}
                model={{
                  message: msg.message,
                  sentTime: msg.sentTime,
                  sender: msg.sender,
                  position: "normal",
                  direction: msg.sender === "You" ? "outgoing" : "incoming",
                }}
              />
            ))}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBot;
