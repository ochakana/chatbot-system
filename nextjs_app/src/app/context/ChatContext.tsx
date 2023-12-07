import React, { ReactNode, createContext, useContext, useState } from "react";

interface Message {
  message: string;
  sentTime: string;
  sender: string;
}

interface ChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  sender: string;
  setSender: React.Dispatch<React.SetStateAction<string>>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sender, setSender] = useState("");

  return (
    <ChatContext.Provider value={{ messages, setMessages, sender, setSender }}>
      {children}
    </ChatContext.Provider>
  );
};
