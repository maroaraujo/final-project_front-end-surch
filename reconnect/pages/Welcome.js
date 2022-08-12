import Head from "next/head";
import Image from "next/image";
import styles from "../component/Welcome/welcome.module.css";
import stylesHome from "../styles/Home.module.css";
import DisplayLogo from "../component/DisplayLogo/DisplayLogo";
import happysun from "../public/images/happy sun.png"
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";




export default function Welcome() {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(user)
  let userName;

  if (user){
    if (user.given_name) {
      userName = user.given_name;
    } else {
      userName = user.name;
    }
  }

  

  return (
    
    <div className={styles.welcomecontainer}>
      <Head>
        <title>Welcome to Reconnect</title>
        <meta name="description" content="Wellness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.welcomemain}>
        <DisplayLogo />
        <h1 className={stylesHome.title}>
        Hi {user ? userName : "Guest"}, <br />
        Reconnect with yourself
        </h1>
        <h4 className={stylesHome.subtitle}>Take a deep breath...</h4>
        <Image className={styles.sun} src={happysun} alt="Welcome Happy Sun" ></Image>
        <button className={styles.getstarted}>
        <Link href="https://reconnect-surch.netlify.app/home">GET STARTED</Link></button>
      </main>
    </div>
  );
}