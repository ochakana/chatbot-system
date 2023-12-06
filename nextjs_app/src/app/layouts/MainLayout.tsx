import React, { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-container">
      <header>ヘッダーコンテンツ</header>
      <main>{children}</main>
      <footer>フッターコンテンツ</footer>
    </div>
  );
};

export default MainLayout;
