import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import TabBar from "../component/TabBar/TabBar";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import MoodContext from "../component/MoodContext/MoodContext";
import AchievementContext from "../component/AchievementContext/AchievementContext";

function MyApp({ Component, pageProps }) {
  
  const router = useRouter();
  const showTabBar =
    router.pathname === "/" || router.pathname === "/Welcome" ? false : true;

  let initialMood = {
    isAwful: false,
    isBad: false,
    isOK: false,
    isGreat: false,
    isGood: false,
  };

  const [mood, setMood] = useState(initialMood);
  const [numAchievement, setNumAchievement] = useState(0);
  
  return (
    <UserProvider>
      <AchievementContext.Provider value={[numAchievement, setNumAchievement]}>
      <MoodContext.Provider value={[mood, setMood]}>
        {showTabBar && <TabBar />}
        <Component {...pageProps} />
      </MoodContext.Provider>
      </AchievementContext.Provider>
    </UserProvider>
  );
}

export default MyApp;
