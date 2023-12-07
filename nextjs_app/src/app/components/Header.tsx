import "@/styles/header.scss";
import React from "react";
import Icon from "@/app/components/button/IconButton";
import Link from "next/link";

type HeaderProps = {
  href?: string; // リンク先のURL
  text: string; // ボタンのテキスト
  onClick?: () => void; // クリックイベントハンドラ
};

const Header: React.FC<HeaderProps> = ({ href, text, onClick }) => {
  return (
    <header>
      <div className="header-home-icon-container">
        <Icon
          src="/icons8-home-32.png"
          href="/"
          className="custom-icon-class"
          internal={true}
        />
      </div>
      <div className="header-text-container">{text}</div>
    </header>
  );
};

export default Header;
