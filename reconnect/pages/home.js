import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DisplayLogo from "../component/DisplayLogo/DisplayLogo";
import MascotSmall from "../component/MascotSmall/MascotSmall";
import MoodQuestion from "../component/MoodQuestion/MoodQuestion";
import Gratitude from "../component/Gratitude/Gratitude";
import Quote from "../component/Quote/Quote"
import ChallengeCard from "../component/ChallengeCard/ChallengeCard";
import Quote from "../component/Quote/Quote";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <div className={styles.container}>
      <Head>
        <title>Reconnect</title>
        <meta name="description" content="Wellness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DisplayLogo className={styles.displayLogo} />
        <MascotSmall className={styles.mascotSmall} />
        <h1 className={styles.title}>
          Hi Guest,
          <br />
          How are you feeling?
        </h1>
        <MoodQuestion className={styles.moodQuestion} />
        <Gratitude/>
        <Quote/>
        <h1 className={styles.title}>Challenges of the week</h1>
        <div className={styles.challenges}>
          <ChallengeCard onClick={onClick} challenge={"Go to the Park"}/>
          <ChallengeCard challenge={"Walk 5k steps"}/>
          <ChallengeCard challenge={"Get 15 mins of sun"}/>
          <ChallengeCard challenge={"Go for a coffee with a friend"}/>
        </div>

      </main>
    </div>
  );
}
