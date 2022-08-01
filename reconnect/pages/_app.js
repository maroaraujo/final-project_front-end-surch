import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import TabBar from "../component/TabBar/TabBar";
// import { useUser } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  // const { user, error, isLoading } = useUser();
  // console.log(user);
  return (
    <UserProvider>
      <TabBar />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
