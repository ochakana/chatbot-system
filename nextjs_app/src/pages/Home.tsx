import Button from "@/app/components/button/Button";
import { useState } from "react";

const HomePage = () => {
  const [aboutData, setAboutData] = useState<string>("親から子へ");

  const handleDataFromAbout = (data: string) => {
    setAboutData(data);
  };

  return (
    <div>
      <h1>Welcome to Homepage</h1>
      <p>いらっしゃいませー</p>

      {/* <Dropdown /> */}

      <Button href="/ChatBot " text="ChatBotページへ" />
      {/* <Chatbot /> */}
      {/* <About parentData={aboutData} onDataFromAbout={handleDataFromAbout} /> */}
    </div>
  );
};

export default HomePage;
