import Button from "@/app/components/button/Button";
import { useState } from "react";

const HomePage = () => {
  const [aboutData, setAboutData] = useState<string>("親から子へ");

  const handleDataFromAbout = (data: string) => {
    setAboutData(data);
  };

  return (
    <div className="text-center">
      <h1>Welcome to Homepage</h1>
      <p>いらっしゃいませー</p>

      <Button href="/ChatBot " text="ChatBotページへ" />
    </div>
  );
};

export default HomePage;
