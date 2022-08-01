import Image from "next/image";
import styles from "../../styles/Home.module.css"

export default function ActivityCard({title, image}){
    return(
        <div className={styles.activityName}>
        <h2>
            {title}
                <Image src={image}/>
            </h2>
        </div>
    )
}