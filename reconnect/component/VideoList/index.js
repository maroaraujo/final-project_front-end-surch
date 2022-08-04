import { useRouter } from "next/router";
import stylesvideo from "../styles/video.module.css";
import Image from 'next/image';
import videoList from '../library/videoList';
import styles from "../styles/Home.module.css";
import Video from "../VideoDescription";




export default function VideoList (array) {


    return (
    <div className={styles.main}>
        
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