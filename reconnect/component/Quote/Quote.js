import styles from "../../styles/Home.module.css"

export default function quote(){
    return(
        <div className={styles.quoteBox}>
            <p className={styles.quoteText}>"This is a super well thought out mind boggling quote that I thought of"</p>
            <p><em>Ismail Ali</em></p>
        </div>
    )
}