import styles from "./ChallengeCard.module.css"

export default function ChallengeCard({challenge}){
    return(
        <button className={styles.card}>
            <h5 className={styles.challengeText} >{challenge}</h5>
        </button>
    )
}