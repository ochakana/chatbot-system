// グローバル適用
import React from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/styles/common.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "@/layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
