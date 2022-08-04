//import ReactPlayer from 'react-player';
//import { useState, useEffect } from 'react';

import { useRouter } from "next/router";
import stylesvideo from "../styles/video.module.css";
import Image from "next/image";
import videoList from "../library/videoList";
import styles from "../styles/Home.module.css";
import CloudyBackground from "../component/CloudyBackground/CloudyBackground.js";
import BackButton from "../component/BackButton/BackButton"
import VideoList from "../component/VideoList"

//import BackButton from "../component/Button/Button";

export default function Meditation() {
  const router = useRouter();
  const onClick = () => {
    router.push("/video");
  };
  console.log(videoList);

  return (
      <VideoList array={videoList.meditation}/>    
      )}

      /*
      <div>
      <div >
        <BackButton url={"https://reconnect-surch.netlify.app/home"} />
        <h1 className={styles.title}>Meditation</h1>
        <CloudyBackground className={stylesvideo.background}/>
      </div>
      <div>
        <Image 
          src={videoList.medita}
          alt="10 minutes meditation video thumbnail"
          layout={imageSize.layout}
          height={imageSize.height}
          width={imageSize.width}
          onClick={onClick}
        />
        <h4 className={stylesvideo.h4}>10-Minute Meditation For Anxiety</h4>
        <p className={stylesvideo.p}>
          Brief description of the video lives here...
        </p>
      </div>

      <div>
        <Image
          src="https://i.ytimg.com/an_webp/syx3a1_LeFo/mqdefault_6s.webp?du=3000&sqp=CICbqZcG&rs=AOn4CLCq6XOilRgWwxP3rZNCz7J4zwCo0Q"
          alt="10 minutes mindfulness meditation video thumbnail"
          layout={imageSize.layout}
          height={imageSize.height}
          width={imageSize.width}
          onClick={onClick}
        />
        <h4 className={stylesvideo.h4}>Daily Calm | 10 Minute Mindfulness Meditation | Letting Go</h4>
        <p className={stylesvideo.p}>
          Brief description of the video lives here...
        </p>
      </div>
      </div>
      */