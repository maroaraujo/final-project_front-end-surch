import styles from "./ChallengeCard.module.css"

export default function ChallengeCard({challenge, onClick}){
    return(
        <button className={styles.card} onClick={onClick}>
            <h5 className={styles.challengeText} >{challenge}</h5>
        </button>
    )
}