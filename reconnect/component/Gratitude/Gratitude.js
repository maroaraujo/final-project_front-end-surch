import Image from "next/image";
import brain from "../../public/images/brain.png"
import styles from "../../styles/Home.module.css"
import stylesGratitude from "./Gratitude.module.css"

export default function Gratitude(){
    return(
        <div className={styles.gratitudeContainer}>
          <Image layout="fixed" src={brain} height={122} width={124}/>
            <div className={styles.gratitudeBox}>
                <p className={stylesGratitude.ptags}>What are you grateful for?</p>
                    <div className={stylesGratitude.inputContainer}>
                        <input className={stylesGratitude.input}placeholder="type here"></input>
                        <p className={stylesGratitude.addButton}>+</p>
                    </div>
                <p className={stylesGratitude.ptags}>date | reason</p>
            </div>
                <h5 className={styles.seeAll}>see all</h5>
        </div>
    )
}