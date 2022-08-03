import styles from "./ExploreCard.module.css"
import {useRouter} from "next/router"

export default function ExploreCard({title, url}){
    const router = useRouter();

    function handleClick(){
        router.push(url)}

    return(
        <div onClick={handleClick} className={styles.exploreCard}>
            <p className={styles.exploreText} style={{color:"white"}}>{title}</p>
        </div>
    )
}