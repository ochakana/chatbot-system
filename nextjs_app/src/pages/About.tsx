import React from 'react';

type AboutProps = {
  parentData: string; // 親から受け取るデータの型定義
  onDataFromAbout: (data: string) => void; // 親から受け取るコールバック関数の型定義
};

const About: React.FC<AboutProps> = ({ parentData, onDataFromAbout }) => {
  const sendDataToParent = () => {
    onDataFromAbout('子から親へ');
  };

  return (
    <div>
      <h1>About Page!</h1>
      <p>親から受け継いだ秘伝のデータ: {parentData}</p> {/* 親から受け取ったデータを表示 */}

      <button onClick={sendDataToParent}>Send Data to Parent</button> {/* ボタンクリックで親へデータを送信 */}
    </div>
  );
}

export default About;
