import Button from "@/app/components/button/Button";
import { useState } from "react";

const HomePage = () => {
  const [aboutData, setAboutData] = useState<string>("親から子へ");

  const handleDataFromAbout = (data: string) => {
    setAboutData(data);
  };

  return (
    <div className="text-center">
      <h1>いらっしゃいませー!</h1>

      <Button href="/ChatBot " text="ChatBotページへ" />
    </div>
  );
};

export default HomePage;
