import styles from "./ChallengeCard.module.css";

export default function ChallengeCard({challenge}){
    return(
        <div className={styles.card}>
            <p className={styles.challengeText} >{challenge}</p>
        </div>
    )
}