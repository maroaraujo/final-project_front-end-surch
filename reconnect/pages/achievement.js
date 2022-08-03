import BackButton from "../component/BackButton/BackButton";
import stylesAchievement from "../styles/Achievement.module.css";
import styles from "../styles/Home.module.css"
import Image from "next/image";
import CloudyBackground from "../CloudyBackground/CloudyBackground";
import puzzle from "../public/images/3completedPuzzle.png"

export default function Achievement(){
    return(
        <main className={styles.main}>
            <h1 className={stylesAchievement.title}>Achievements</h1>
            <CloudyBackground/>
            <BackButton/>
            <div className={stylesAchievement.puzzleContainer}>
                <Image  src={puzzle} layout="fill"  quality={100}/>
            </div>
           <h1 className={stylesAchievement.subTitle}>
           Well done! You earned <br/> 
           3 puzzle pieces to <br/>
           reconnect with yourself</h1>
        </main>
    )
}