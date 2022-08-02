import Image from "next/image";
import styles from "../../styles/Home.module.css"

export default function ActivityCard({title, image}){
    return(
        <div className={styles.activityCard}>
            <h2 className={styles.activityText}>{title}</h2>
            <Image src={image}/>
        </div>
    )
}