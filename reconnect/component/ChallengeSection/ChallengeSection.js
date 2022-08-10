import styles from "./ChallengeCard.module.css";
import ChallengeCard from "./ChallengeCard";
import { useContext, useState } from "react";
import AchievementContext from "../AchievementContext/AchievementContext";
import { useRouter } from "next/router";

export default function ChallengeSection() {

     const router = useRouter();
     let [numAchievement, setNumAchievement] = useContext(AchievementContext);


     function handleClick(e) {
    
        if (e.target.checked){
            
            const updatedNumAchievement = numAchievement + 1  
            setNumAchievement(updatedNumAchievement);
            numAchievement = updatedNumAchievement;
            console.log(numAchievement);
            router.push("/achievement");
            
        } else {
            const updatedNumAchievement = numAchievement - 1  
            setNumAchievement(updatedNumAchievement)
            console.log(numAchievement);
            
        }
    }
    
    

    return(
        <div>
            <h1 className={styles.title}>Challenges of the week</h1>
            <div className={styles.challenges} > 
            <ChallengeCard handleClick={handleClick} challenge={"Go to the Park"} />
            <ChallengeCard handleClick={handleClick} challenge={"Walk 5k steps"} />
            <ChallengeCard handleClick={handleClick} challenge={"Get 15 mins of sun"}  />
            <ChallengeCard handleClick={handleClick} challenge={"Go for a coffee with a friend"} />
            </div>
        </div>
    )
}