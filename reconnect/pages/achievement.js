import BackButton from "../component/BackButton/BackButton";
import stylesAchievement from "../styles/Achievement.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import CloudyBackground from "../component/CloudyBackground/CloudyBackground";
import puzzle from "../public/images/3completedPuzzle.png";
import AchievementContext from "../component/AchievementContext/AchievementContext";
import { useContext } from "react";
import ChallengeSection from "../component/ChallengeSection/ChallengeSection";

export default function Achievement() {
  
  let [numAchievement, setNumAchievement] = useContext(AchievementContext);


  function test(){
    console.log(numAchievement)
  }
  
  return (
    <main className={styles.main} onClick={test}>
      <h1 className={stylesAchievement.title}>Achievements</h1>
      <CloudyBackground />
      <BackButton url="/home" />
      <div className={stylesAchievement.puzzleContainer}>
        <Image src={puzzle} alt="puzzle" layout="fill" quality={100} />
      </div>
      <h1 className={stylesAchievement.subTitle}>
        Well done! You earned <br />
        {numAchievement} puzzle pieces to <br />
        reconnect with yourself
      </h1>
    </main>
  );
}
