import "@/styles/image/avatar.scss";
import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div className="avatarContainer">
      <Image
        src={src}
        alt={alt || "Avatar"}
        className="avatarImage"
        width={100} // 元の画像のアスペクト比に合わせる
        height={100} // 元の画像のアスペクト比に合わせる
      />
    </div>
  );
};

export default Avatar;
