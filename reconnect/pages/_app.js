import "../styles/globals.css";
import React, { useEffect } from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import TabBar from "../component/TabBar/TabBar";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showTabBar = (router.pathname === "/" || router.pathname === "/Welcome")? false : true ;
  
  // const [showNavBar, setShowNavBar] = useState(true)
  // useEffect(()=> {
  //   if (router.pathname === "/" || router.pathname === "/Welcome"){
  //     setShowNavBar(!showNavBar)
  //   }
  // },[router.pathname])
  

  return (
    <UserProvider>
      {showTabBar && <TabBar />}
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
