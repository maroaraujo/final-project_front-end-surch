import styles from "./ExploreCard.module.css"

export default function ExploreCard({title}){
    return(
        <div className={styles.exploreCard}>
            <p className={styles.exploreText} style={{color:"white"}}>{title}</p>
        </div>
    )
}