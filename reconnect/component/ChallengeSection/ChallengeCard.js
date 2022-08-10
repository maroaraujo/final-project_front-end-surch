import styles from "./ChallengeCard.module.css";
import { useState, useContext } from 'react';
import { useRouter } from "next/router";
import AchievementContext from "../AchievementContext/AchievementContext";


export default function ChallengeCard({challenge, handleClick}){

    const [labelClass, setLabelClass] = useState(styles.cardBefore)

    function handleClass(e) {
    
        if (e.target.checked){
            setLabelClass(styles.cardAfter);
        } else {
            setLabelClass(styles.cardBefore);
        }
    }
    

    return(
        <label className={labelClass}>
            <p className={styles.challengeText} >{challenge}</p>
            <input type="checkbox" onChange={handleClass} onClick={handleClick}/>
            <span className={styles.checkmark}></span>
        </label>
    )
}