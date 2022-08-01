import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DisplayLogo from "../component/DisplayLogo/DisplayLogo";
import happysun from "../public/images/happy sun.png"


export default function Welcome() {
  return (
    <div className={styles.welcomecontainer}>
      <Head>
        <title>Welcome to Reconnect</title>
        <meta name="description" content="Wellness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.welcomemain}>
        <DisplayLogo />
        <h1 className={styles.title}>
        Hi Guest, <br />
        Reconnect with yourself
        </h1>
<h4>Take a deep breath...</h4>
        <Image className={styles.sun} src={happysun} alt="Welcome Happy Sun" ></Image>
        <button className={styles.getstarted}>GET STARTED</button>
      </main>
    </div>
  );
}