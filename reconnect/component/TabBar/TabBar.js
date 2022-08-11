import Styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  IoHomeSharp,
  IoHomeOutline,
  IoStarOutline,
  IoStar,
  IoSettingsOutline,
  IoSettingsSharp,
  IoJournal,
  IoJournalOutline,
} from "react-icons/io5";
import { AiOutlinePlusSquare, AiFillPlusSquare } from "react-icons/ai";
import {
  BsEmojiSmile,
  BsEmojiSmileFill,
  BsJournalBookmarkFill,
  BsJournalBookmark,
} from "react-icons/bs";

import { useUser } from "@auth0/nextjs-auth0";

function TabBar(props) {
  const { user, error, isLoading } = useUser();

  const router = useRouter();
  const [activeTabs, setActiveTabs] = useState(props.name);
  useEffect(() => {
    switch (activeTabs) {
      case "home":
        router.push("/home");
        break;
      case "moodlog":
        router.push("/moodlog");
        break;
      case "add":
        router.push("/gratitudewall");
        break;
      case "settings":
        router.push("/settings");
        break;
    }
  }, [activeTabs]);

  return (
    <div className={`${Styles.bottomNav}`}>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "home" ? (
          <IoHomeSharp
            size="50"
            color="#254E7B"
            onClick={() => setActiveTabs("home")}
          />
        ) : (
          <IoHomeOutline
            size="50"
            color="#254E7B"
            onClick={() => setActiveTabs("home")}
          />
        )}
        <span>Home</span>
      </div>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "moodlog" ? (
          <BsJournalBookmarkFill
            size="50"
            color="#254E7B"
            onClick={() => setActiveTabs("moodlog")}
          />
        ) : (
          <BsJournalBookmark
            size="50"
            color="#254E7B"
            onClick={() => setActiveTabs("moodlog")}
          />
        )}
        <span>Journal</span>
      </div>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "add" ? (
          <BsEmojiSmileFill
            size="50"
            color="#254E7B"
            onClick={() => setActiveTabs("add")}
          />
        ) : (
          <BsEmojiSmile
            size="50"
            color="#254E7B"
            onClick={() => setActiveTabs("add")}
          />
        )}
        <span>Gratitude</span>
      </div>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "settings" ? (
          <IoSettingsSharp
            size="50"
            color="#254E7B"
            onClick={() => setActiveTabs("settings")}
          />
        ) : (
          <IoSettingsOutline
            size="50"
            color="#254E7B"
            onClick={() => setActiveTabs("settings")}
          />
        )}
        <span>Settings</span>
      </div>
    </div>
  );
}

export default TabBar;
