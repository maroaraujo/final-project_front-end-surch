import Image from "next/image";
import BackButton from "../component/BackButton/BackButton";
import Button from "../component/Button/Button";
import stylesgratitudewall from "../component/GratitudeWall/gratitudewall.module.css"
import gratitudebackground from "../public/images/GratitudeBackGround1.png"
import styles from "../styles/Home.module.css"


export default function gratitudewall() {
    return (
        <div className={styles.main}>
        <BackButton url={"https://reconnect-surch.netlify.app/home"}/>
        <h1 className={styles.title}>Gratitude Wall</h1>
        <div className={stylesgratitudewall.background}>
            <Image
              alt="GratitudeBackground"
              src={gratitudebackground}
              layout="fill"
              objectFit="cover"
              quality={100}
            />  
        </div>
        
        <h4 className={stylesgratitudewall.subtitle}>What are you grateful for?</h4>
        <input className={stylesgratitudewall.input} type="text" placeholder="type here"></input>
        <Button text="Save Gratitude" link="addsavelinkhere"/>
        <h4 className={stylesgratitudewall.subtitle}>Gratitude diary</h4>
        </div>
    )
}