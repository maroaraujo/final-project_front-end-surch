import styles from "./ChallengeCard.module.css";
import { useState, useContext, useEffect } from 'react';
import Router, { useRouter } from "next/router";
import AchievementContext from "../AchievementContext/AchievementContext";
import Link from "next/link";


export default function ChallengeCard({ challenge, id, completion}){

    const [isComplete, setIsComplete] = useState(completion)
    const [achievementList, setAchievementList] = useContext(AchievementContext)
    const router = useRouter();


    async function handleClick() {

        let updatedItem = {
            userid:1,
            achievement: challenge,
            completion:!isComplete,
            id: id
        }

        console.log('updatedItem.completion',updatedItem.completion);

        const response = await fetch (`https://reconnect-surch.herokuapp.com/achievement/${id}`,{
            method: "PUT", 
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(updatedItem)
        });
        const data = await response.json();
        console.log(data)
        data.success ? setIsComplete(updatedItem.completion): setIsComplete(updatedItem.completion);
        let updatedAchievementList = achievementList;
        setAchievementList(updatedAchievementList);
        //console.log(achievementList)
        //router.push("/achievement")
        }

        //useEffect(()=>{getChallenge()},[achievementList]);

    
    
    return(
        <label className={isComplete ? styles.cardAfter: styles.cardBefore}>
            <p className={styles.challengeText} >{challenge}</p>
            <Link href={"/achievement"}><input type="checkbox" onClick={handleClick}/></Link>
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