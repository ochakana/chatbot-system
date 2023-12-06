import styles from "@/styles/button/button.module.scss";
import React from "react";
import Link from "next/link";

type ButtonProps = {
  href?: string; // リンク先のURL
  text: string; // ボタンのテキスト
  onClick?: () => void; // クリックイベントハンドラ
};

const Button: React.FC<ButtonProps> = ({ href, text, onClick }) => {
  // リンクがある場合はLinkコンポーネントを使用
  if (href) {
    return (
      <div className={styles.btnStyle}>
        <Link href={href}>
          <button type="button" className="btn btn-primary btn-lg">
            {text}
          </button>
        </Link>
      </div>
    );
  }

  // それ以外の場合は通常のボタンを表示
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
