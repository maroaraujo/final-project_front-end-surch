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
} from "react-icons/io5";
import { AiOutlinePlusSquare, AiFillPlusSquare } from "react-icons/ai";

function TabBar(props) {
  const router = useRouter();
  const [activeTabs, setActiveTabs] = useState(props.name);
  useEffect(() => {
    switch (activeTabs) {
      case "home":
        router.push("/home");
        break;
      case "favourites":
        router.push("/favourites");
        break;
      case "add":
        router.push("/add");
        break;
      case "settings":
        router.push("/settings");
        break;
      // default:
      //   router.push("/");
      // break;
    }
  }, [activeTabs, router]);

  return (
    <div className={`${Styles.bottomNav}`}>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "home" ? (
          <IoHomeSharp
            size="35"
            color="#000"
            onClick={() => setActiveTabs("home")}
          />
        ) : (
          <IoHomeOutline
            size="35"
            color="#000"
            onClick={() => setActiveTabs("home")}
          />
        )}
        <span>Home</span>
      </div>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "favourites" ? (
          <IoStar
            size="35"
            color="#000"
            onClick={() => setActiveTabs("favourites")}
          />
        ) : (
          <IoStarOutline
            size="35"
            color="#000"
            onClick={() => setActiveTabs("favourites")}
          />
        )}
        <span>Favourites</span>
      </div>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "add" ? (
          <AiFillPlusSquare
            size="35"
            color="#000"
            onClick={() => setActiveTabs("add")}
          />
        ) : (
          <AiOutlinePlusSquare
            size="35"
            color="#000"
            onClick={() => setActiveTabs("add")}
          />
        )}
        <span>Add</span>
      </div>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "settings" ? (
          <IoSettingsSharp
            size="35"
            color="#000"
            onClick={() => setActiveTabs("settings")}
          />
        ) : (
          <IoSettingsOutline
            size="35"
            color="#000"
            onClick={() => setActiveTabs("settings")}
          />
        )}
        <span>Account</span>
      </div>
    </div>
  );
}

export default TabBar;
