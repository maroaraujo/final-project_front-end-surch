import Image from "next/image";
import styles from "../../styles/Home.module.css"
import {useRouter} from "next/router"

export default function ActivityCard({title, image, url}){
    const router = useRouter();

    function handleClick(){
        router.push(url)}

    return(
        <div className={styles.activityCard} onClick={handleClick}>
            <h2 className={styles.activityText}>{title}</h2>
            <Image src={image}/>
        </div>
    )
}