import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import TabBar from "../component/TabBar/TabBar";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import MoodContext from "../component/MoodContext/MoodContext";
import AchievementContext from "../component/AchievementContext/AchievementContext";
import UserMoodContext from "../component/UserMoodContext/UserMoodContext.js";

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

  const dummyData = [
    {
      id: null,
      date: "2022-01-01",
      mood: null,
      whatmakesfeel: null,
      notes: null,
    },
    {
      id: null,
      date: "2022-01-01",
      mood: null,
      whatmakesfeel: null,
      notes: null,
    },
    {
      id: null,
      date: "2022-01-01",
      mood: null,
      whatmakesfeel: null,
      notes: null,
    },
    {
      id: null,
      date: "2022-01-01",
      mood: null,
      whatmakesfeel: null,
      notes: null,
    },
    {
      id: null,
      date: "2022-01-01",
      mood: null,
      whatmakesfeel: null,
      notes: null,
    },
    {
      id: null,
      date: "2022-01-01",
      mood: null,
      whatmakesfeel: null,
      notes: null,
    },
    {
      id: null,
      date: "2022-01-01",
      mood: null,
      whatmakesfeel: null,
      notes: null,
    },
  ];

  const [mood, setMood] = useState(initialMood);
  const [achievementList, setAchievementList] = useState([]);
  const [userMood, setUserMood] = useState(dummyData);

  return (
    <UserProvider>
      <UserMoodContext.Provider value={[userMood, setUserMood]}>
        <AchievementContext.Provider
          value={[achievementList, setAchievementList]}
        >
          <MoodContext.Provider value={[mood, setMood]}>
            {showTabBar && <TabBar />}
            <Component {...pageProps} />
          </MoodContext.Provider>
        </AchievementContext.Provider>
      </UserMoodContext.Provider>
    </UserProvider>
  );
}

export default MyApp;
