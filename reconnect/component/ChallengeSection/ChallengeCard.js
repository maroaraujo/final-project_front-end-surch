import styles from "./ChallengeCard.module.css";
import { useState, useContext } from 'react';
import { useRouter } from "next/router";
import AchievementContext from "../AchievementContext/AchievementContext";


export default function ChallengeCard({ challenge, id, completion }){

    const [labelClass, setLabelClass] = useState(styles.cardBefore)
    const achievementUrl = 'https://reconnect-surch.herokuapp.com/achievement'

    completion ? setLabelClass(styles.cardAfter) : setLabelClass(styles.cardBefore);
    
    
    return(
        <label className={labelClass}>
            <p className={styles.challengeText} >{challenge}</p>
            <input type="checkbox"/>
            <span className={styles.checkmark}></span>
        </label>
    )
}

/**
 
e.target.checked ? setLabelClass(styles.cardAfter) : setLabelClass(styles.cardBefore);

 if (e.target.checked) {
            setLabelClass(styles.cardAfter);

        } else {
            setLabelClass(styles.cardBefore);

        }

async function achievementUpdate(updatedItem) {
        const response = await fetch (achievementUrl,{
            method: "PATCH", 
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(updatedItem)
        });
        const data = await response.json();
        console.log(data);
        
    }
    

 */