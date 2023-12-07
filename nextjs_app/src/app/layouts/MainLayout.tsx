import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();
  let headerText = "Home";

  if (router.pathname === "/ChatBot") {
    headerText = "ChatBotページへようこそ !";
  }

  return (
    <div className="main-container">
      <Header text={headerText} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
