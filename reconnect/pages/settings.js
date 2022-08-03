import { useUser } from "@auth0/nextjs-auth0";
import Logout from "../component/Logout/logout";
import Image from "next/image";
import backgroundImage from "../public/images/SettingsBackGround.png"

import styles from "../styles/Settings.module.css"

export default function Settings() {
  const { user, error, isLoading } = useUser();
  return (
    <main className={styles.title}>
    <h1>Settings</h1>
    <div className={styles.backgroundImage}>
      <Image
        alt="SettingsBackground"
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      
    </div>

      <div className={styles.body}>
      
    <h3>Notifications</h3>

    <h3>Dark Mode</h3>

      {user ? <Logout /> : null} 
      </div>
    </main>
  );
}

/*



*/