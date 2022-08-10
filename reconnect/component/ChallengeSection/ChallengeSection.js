import styles from "./ChallengeCard.module.css";
import ChallengeCard from "./ChallengeCard";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ChallengeSection({list}) {
    
    let [achievementList, setAchievementList] = useState([]);

    async function getChallenge() {
       
        const response = await fetch('https://reconnect-surch.herokuapp.com/achievement');
        const data = await response.json();
        //console.log('achievementList', data.payload);
        setAchievementList(data.payload);

    }
    
    useEffect(() => {getChallenge();},[]);


    return(
        <div>
            <h1 className={styles.title}>Challenges of the week</h1>
            <div className={styles.challenges} > 
            {achievementList.map(e => (
                <ChallengeCard key={e.id} id={e.id} challenge={e.achievement} completion={e.completion}/>
            ))}
            </div>
        </div>
    )
}

/*

const router = useRouter();
let [numAchievement, setNumAchievement] = useContext(AchievementContext);

async function handleClick(e) {
        
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
        
    }};
    async function handleClick(e) {
        
        let updatedItem ={
            id:key,
            completion: e.target.checked,
            achievement: challenge
        }

        achievement
    }

 */

