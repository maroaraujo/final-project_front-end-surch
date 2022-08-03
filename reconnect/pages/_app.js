import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import TabBar from "../component/TabBar/TabBar";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showTabBar = router.pathname === "/" || "/welcome" ? false : true;
  return (
    <UserProvider>
      {showTabBar && <TabBar />}
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
