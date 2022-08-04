//import ReactPlayer from 'react-player';
//import { useState, useEffect } from 'react';
import BackButton from "../component/BackButton/BackButton";
import { useRouter } from "next/router";
import stylesvideo from "../styles/video.module.css";
import Image from 'next/image';
import videoList from '../library/videoList';
import styles from "../styles/Home.module.css";
//import CloudyBackground from "../;




export default function Meditation () {

    const router = useRouter();
    const imageSize = {width:1280, height:720, layout:"intrinsic"};
    const onClick = () => {router.push('/video')};
    console.log(videoList)
    


    return (
    <div className={styles.main}>
        <BackButton url={"https://reconnect-surch.netlify.app/home"}/>
        <h1 className={styles.title}>Meditation</h1>
        
        <div className={stylesvideo.background}>
        <Image src='https://i.ytimg.com/vi/O-6f5wQXSu8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBajCqSN4D6cgnZT8SnZ-RcV0ILNg' alt='10 minutes meditation video thumbnail' layout={imageSize.layout} height={imageSize.height} width={imageSize.width} onClick={onClick}/>
        
        <h4 className={stylesvideo.h4}>10-Minute Meditation For Anxiety</h4>
        <p className={stylesvideo.p}>Brief description of the video lives here...</p>
        </div>
        <div>
        <Image src='https://i.ytimg.com/vi/O-6f5wQXSu8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBajCqSN4D6cgnZT8SnZ-RcV0ILNg' alt='10 minutes meditation video thumbnail' layout={imageSize.layout} height={imageSize.height} width={imageSize.width} onClick={onClick}/>
        
        <h4 className={stylesvideo.h4}>10-Minute Meditation For Anxiety</h4>
        <p className={stylesvideo.p}>Brief description of the video lives here...</p>
        </div>
        <div>
        <Image src='https://i.ytimg.com/vi/O-6f5wQXSu8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBajCqSN4D6cgnZT8SnZ-RcV0ILNg' alt='10 minutes meditation video thumbnail' layout={imageSize.layout} height={imageSize.height} width={imageSize.width} onClick={onClick}/>
        
        <h4 className={stylesvideo.h4}>10-Minute Meditation For Anxiety</h4>
        <p className={stylesvideo.p}>Brief description of the video lives here...</p>
        </div>
        <div>
        <Image src='https://i.ytimg.com/vi/O-6f5wQXSu8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBajCqSN4D6cgnZT8SnZ-RcV0ILNg' alt='10 minutes meditation video thumbnail' layout={imageSize.layout} height={imageSize.height} width={imageSize.width} onClick={onClick}/>
        
        <h4 className={stylesvideo.h4}>10-Minute Meditation For Anxiety</h4>
        <p className={stylesvideo.p}>Brief description of the video lives here...</p>
        </div>
        <footer className={stylesvideo.footer}/>
    </div>
    )
    }


    //This will need to go back in just before h1 before merging, also remove other comments at import
//<CloudyBackground/>



/*
<ReactPlayer url="https://www.video-url.com" controls playing={ isPlaying }/>
<ReactPlayer
    url="https://www.video-url.com"
    config={ {
        file: {
            attributes: {
                controlsList: "nodownload"
            }
        }
    } } />
    const handleContextMenu = useCallback((event) => {
        event.preventDefault();
    }, []);
    
    // ...
    
    <ReactPlayer url="https://www.video-url.com" onContextMenu={ handleContextMenu } />
    <ReactPlayer
    url="https://www.video-url.com"
    light
    playIcon={ <div>Icon</div> } />
    */