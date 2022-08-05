import styles from "../styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import Login from "../component/Login/login";
import Image from "next/image";
import landingpage from "../public/images/LandingPage.png"
import Head from "next/head";
import Button from "../component/Button/Button";






export default function Signup() {
  const { user, error, isLoading } = useUser();

    return (
    <div>
     <Head>
        <title>Reconnect</title>
        <meta name="description" content="Wellness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={styles.main}> 
    <Image className={styles.landingpage} src={landingpage} alt={landingpage} />
      
   
    <div>
    <h2 className={styles.signuptitle}>Reconnect with yourself</h2>
    <p className={styles.signuptext1}>Take a deep breath...</p>
    
    <Button text="SIGN UP"
        link="/api/auth/login"/>
    
    <p className={styles.signuptext1}>Already have an account? <Login/></p>
    <br></br>
    <br></br>
    <p className={styles.signupfooter}>from SURCH</p>
    </div>
    
    </main>
    </div>
    );
    }

