import Image from "next/image";
import Link from "next/link";
import React from "react";

type IconProps = {
  src: string; // 画像のソースパス
  href: string; // リンク先のURL
  className?: string; // CSSクラス名
  internal?: boolean; // 内部リンクかどうか
};

const Icon: React.FC<IconProps> = ({ src, href, className, internal }) => {
  // 内部リンクの場合
  if (internal) {
    return (
      <Link href={href} passHref>
        <Image src={src} alt="Icon" width={50} height={50} />
      </Link>
    );
  }

  // 外部リンクの場合
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={src} alt="Icon" width={50} height={50} />
    </a>
  );
};

export default Icon;
