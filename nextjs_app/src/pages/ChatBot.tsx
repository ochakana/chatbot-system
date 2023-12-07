import { useChat } from "@/app/context/ChatContext";
import Avatar from "@/components/image/Avater";
import InputTextField from "@/components/text/InputTextField";
import "@/styles/chatbot.scss";
import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

interface Message {
  message: string;
  sentTime: string;
  sender: string;
}

const ChatBot = () => {
  const { messages, setMessages, sender, setSender } = useChat();

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
    <div className="chat-bot-container">
      <div className="name-input-conteiner">
        <p>お名前をどうぞ：</p>
        <InputTextField
          value={sender}
          onChange={setSender}
          placeholder="Your name"
        />
      </div>

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
