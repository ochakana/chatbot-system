// Home.tsxへリダイレクトする
import { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectHomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/Home");
  }, [router]);

  return null;
};

export default RedirectHomePage;
