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
      //   router.push("/home");
      //   break;
    }
  }, [activeTabs, router.pathname]);
  // const { state, dispatch } = useContext(GlobalContext);

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
        {activeTabs === "favourites" ? (
          <IoStar
            size="50"
            color="#254E7B"
            onClick={() => setActiveTabs("favourites")}
          />
        ) : (
          <IoStarOutline
            size="50"
            color="#254E7B"
            onClick={() => setActiveTabs("favourites")}
          />
        )}
        <span>Favourites</span>
      </div>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "add" ? (
          <AiFillPlusSquare
            size="50"
            color="##254E7B"
            onClick={() => setActiveTabs("add")}
          />
        ) : (
          <AiOutlinePlusSquare
            size="50"
            color="##254E7B"
            onClick={() => setActiveTabs("add")}
          />
        )}
        <span>Add</span>
      </div>
      <div className={`${Styles.bnTab}`}>
        {activeTabs === "settings" ? (
          <IoSettingsSharp
            size="50"
            color="##254E7B"
            onClick={() => setActiveTabs("settings")}
          />
        ) : (
          <IoSettingsOutline
            size="50"
            color="##254E7B"
            onClick={() => setActiveTabs("settings")}
          />
        )}
        <span>Settings</span>
      </div>
    </div>
  );
}

export default TabBar;
