import { useRouter } from "next/router";
import stylesvideo from "../../styles/video.module.css";
import styles from "../../styles/Home.module.css";
import BackButton from "../../component/BackButton/BackButton";
import CloudyBackground from "../../component/CloudyBackground/CloudyBackground.js";
import { useState } from "react";
import videoList from "../../library/videoList";
import Video from "../video"




export default function VideoList (type) {
    
    //const [array, setArray] = useState([])
    
    
    let array=videoList.meditation
    

    return (
    <div>
        <div >
        <BackButton url={"https://reconnect-surch.netlify.app/home"} />
        <h1 className={styles.title}>Meditation</h1>
        <CloudyBackground className={stylesvideo.background}/>
        </div>
        
        {array.map((video) => (
            <Video
            key={video.id}
            img={video.imgUrl}
            title={video.title}
            description={video.description}
            />
        ))}
    </div>
    )
    }