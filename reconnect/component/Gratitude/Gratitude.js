import Image from "next/image";
import brain from "../../public/images/brain.png"
import styles from "../../styles/Home.module.css"


export default function Gratitude(){
    return(
        <div className={styles.gratitudeContainer}>
          <Image layout="fixed" src={brain} height={122} width={124}/>
            <div className={styles.gratitudeBox}>
                <p>What are you grateful for?</p>
                <input placeholder="type here"></input>
                <p>date | reason</p>
            </div>
                <a href={"https://reconnect-surch.netlify.app/gratitudewall"} className={styles.seeAll}>see all</a>
        </div>
    )
}