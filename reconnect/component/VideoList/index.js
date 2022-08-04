import { useRouter } from "next/router";
import stylesvideo from "../styles/video.module.css";
import Image from 'next/image';
import videoList from '../library/videoList';
import styles from "../styles/Home.module.css";
import Video from "../VideoDescription";
import BackButton from "../../component/BackButton/BackButton";
import CloudyBackground from "../../component/CloudyBackground/CloudyBackground.js";






export default function VideoList (array) {


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