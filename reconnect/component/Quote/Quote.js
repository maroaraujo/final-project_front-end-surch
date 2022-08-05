import styles from "./Quote.module.css"
import feathers from "../../public/images/feathers.png"
import Image from "next/image"

export default function quote(){
    return(
        <div className={styles.quoteBox}>
            <h3 className={styles.quoteText} style={{color: "#F9F5EE", fontSize: "20"}}><em>"Be happy with what you have. Be excited about what you want."</em></h3>
            <div className={styles.authorContainer}>
                <p className={styles.quoteAuthor} style={{color: "#F9F5EE", fontSize: "16"}}><em>~Alan Cohen</em></p>
                <Image className={styles.feathers} layout="intrinsic" src={feathers} alt="feathers" width={59} height={51}/>
            </div>
        </div>
    )
}