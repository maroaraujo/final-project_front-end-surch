import logo from "../../public/images/logo.png"
import Image from "next/image"
import styles from "../../styles/Home.module.css"

export default function DisplayLogo(){
    return(
        <div className={styles.displayLogo}>

        <Image src={logo} alt="Reconnect Logo" width={80.4} height={51.7} />
        </div>
    )
}