// グローバル適用
import React from "react";
import type { AppProps } from "next/app";
import { ChatProvider } from "@/app/context/ChatContext";
import "@/styles/globals.css";
import "@/styles/common.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "@/layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChatProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChatProvider>
  );
}

export default MyApp;
