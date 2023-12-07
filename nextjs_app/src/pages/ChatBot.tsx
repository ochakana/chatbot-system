import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import InputTextField from "@/components/text/InputTextField";
import Avatar from "@/components/image/Avater";
import "@/styles/chatbot.scss";

interface Message {
  message: string;
  sentTime: string;
  sender: string;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sender, setSender] = useState("");

  const getFormattedTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  };

  const sendMessage = async (text: string) => {
    // ユーザーのメッセージを追加
    const userMessage = {
      message: text,
      sentTime: getFormattedTime(),
      sender: sender || "Unknown",
    };
    setMessages([...messages, userMessage]);

    // OpenAIにリクエストを送信
    try {
      const response = await fetch("http://localhost:5000/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();
      // OpenAIの返答を追加
      setMessages((messages) => [
        ...messages,
        { message: data.message, sentTime: getFormattedTime(), sender: "Bot" },
      ]);
    } catch (error) {
      console.error("Error fetching response from OpenAI:", error);
    }
  };

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <span style={{ paddingLeft: "10px" }}>お名前をどうぞ：</span>
      <InputTextField
        value={sender}
        onChange={setSender}
        placeholder="Your name"
      />
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages.map((msg, index) => (
              <div
                className={`message-container ${
                  msg.sender === sender ? "outgoing" : ""
                }`}
                key={index}
              >
                <Avatar
                  src={
                    msg.sender === "Bot"
                      ? "/ChatGPT_logo.svg"
                      : "/genbaneko001.jpg"
                  }
                  alt={
                    msg.sender === "Bot"
                      ? "ChatGPT_logo.svg"
                      : "genbaneko001.jpg"
                  }
                />

                <Message
                  model={{
                    message: msg.message,
                    sentTime: msg.sentTime,
                    sender: msg.sender,
                    position: "normal",
                    direction: msg.sender === sender ? "outgoing" : "incoming",
                  }}
                />
              </div>
            ))}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={sendMessage} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBot;
