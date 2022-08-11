import BackButton from "../component/BackButton/BackButton";
import stylesAchievement from "../styles/Achievement.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import CloudyBackground from "../component/CloudyBackground/CloudyBackground";
import AchievementContext from "../component/AchievementContext/AchievementContext";
import { useContext, useState, useEffect } from "react";
import complete3puzzle from "../public/images/3completedPuzzle.png";
import complete2puzzle from "../public/images/2completed.png";
import complete1puzzle from "../public/images/1completed.png";
import allcomplete from "../public/images/allcomplete.png";


export default function Achievement() {
  
  const [achievementList, setAchievementList]= useState([]);
  let puzzle;
  
  async function getChallenge() {
      
    const response = await fetch('https://reconnect-surch.herokuapp.com/achievement');
    const data = await response.json();
    let updatedList = data.payload;
    setAchievementList(updatedList);

  }
  
  useEffect(() => {getChallenge()}, []);

  let completionList = [];
  achievementList.forEach(e => completionList.push(e.completion))
  console.log('achievementList', achievementList,'completionList', completionList)
  let achievementCount = completionList.filter(e => e===true)

  switch (achievementCount.length) {
    case 0:
      puzzle = complete1puzzle;
      break;
    case 1:
      puzzle = complete1puzzle;
      break;
    case 2:
      puzzle = complete2puzzle;
      break;
    case 3:
      puzzle = complete3puzzle;
      break;
    case 4:
      puzzle = allcomplete;
      break;
  }
  

  
  
  return (
    <main className={styles.main}>
      <h1 className={stylesAchievement.title}>Achievements</h1>
      <CloudyBackground />
      <BackButton url="/home" />
      {<div><div className={stylesAchievement.puzzleContainer}>
        <Image src={puzzle} alt="puzzle" layout="fill" quality={100} />
      </div>
      <h1 className={stylesAchievement.subTitle} >
        Well done! You earned <br />
        {achievementCount.length} puzzle pieces to <br />
        reconnect with yourself
      </h1>
      </div>}
    </main>
  );
}

/*

*/