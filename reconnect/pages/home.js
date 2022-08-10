import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DisplayLogo from "../component/DisplayLogo/DisplayLogo";
import MascotSmall from "../component/MascotSmall/MascotSmall";
import MoodQuestion from "../component/MoodQuestion/MoodQuestion";
import Gratitude from "../component/Gratitude/Gratitude";
import Quote from "../component/Quote/Quote";
import ActivityCard from "../component/ActivityCard/ActivityCard";
import meditationPic from "../public/images/maditation.png";
import breathingPic from "../public/images/Breathing.png";
import stretchingPic from "../public/images/Stretching.png";
import yogaPic from "../public/images/Yoga.png";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import ExploreCard from "../component/ExploreCard/ExploreCard";
import MoodContext from "../component/MoodContext/MoodContext.js";
import { useContext } from "react";
import ChallengeSection from "../component/ChallengeSection/ChallengeSection";


export default function Home() {

  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const [mood, setMood] = useContext(MoodContext)
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Reconnect</title>
        <meta name="description" content="Wellness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <DisplayLogo />
        <div className={styles.mascotContainer}>
          <MascotSmall className={styles.mascotSmall} />

        </div>
        <h1 className={styles.title}>
          Hi Guest,
          <br />
          How are you feeling?
        </h1>

        <MoodQuestion className={styles.moodQuestion} />
        <Gratitude/>
        <Quote/>
        <ChallengeSection/>

        <div>
        <h1 className={styles.title}>All Activities</h1>
        <ActivityCard title={"Meditation"} image={meditationPic} url={"/meditation"}/>
        <ActivityCard title={"Breathing Exercises"} image={breathingPic} url={"/breathing"}/>
        <ActivityCard title={"Stretching"} image={stretchingPic} url={"/stretching"}/>
        <ActivityCard title={"Yoga "} image={yogaPic} url={"/yoga"}/>
        </div>
        <div className={styles.spacetoNavBar}>
        </div>
      </main>
    </div>
  );
}
