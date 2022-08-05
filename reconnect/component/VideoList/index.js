import { useRouter } from "next/router";
import stylesvideo from "../../styles/video.module.css";
import styles from "../../styles/Home.module.css";
import BackButton from "../../component/BackButton/BackButton";
import CloudyBackground from "../../component/CloudyBackground/CloudyBackground.js";
import Video from "../video";





export default function VideoList ({array, pageTitle, type}) {
    
    console.log('type',typeof type)

    return (
    <div >
        <div className={stylesvideo.cloudbody}>
        <BackButton url={"https://reconnect-surch.netlify.app/home"} />
        <h1 className={styles.title}>{pageTitle}</h1>
        <CloudyBackground className={stylesvideo.background}/>
        </div>
        
        {array.map(video => {
            return (
                
                <div>
                    <Video
                    key={video.id}
                    id={video.id}
                    imgUrl={video.imgUrl}
                    title={video.title}
                    description={video.description}
                    type={type}
                    />
                </div>
                )
                }
            )
        }
    </div>
    )
    }