import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import styles from "../styles/video.module.css"
import Image from 'next/image'

export default function Meditation () {

    const router = useRouter();
    const imageSize = {width:1280, height:720, layout:"intrinsic"};
    const onClick = () => {router.push('/video')};
    


    return (
    <div>
        <Image src='https://i.ytimg.com/vi/O-6f5wQXSu8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBajCqSN4D6cgnZT8SnZ-RcV0ILNg' alt='10 minutes meditation video thumbnail' layout={imageSize.layout} height={imageSize.height} width={imageSize.width} onClick={onClick}/>
        <div className = {styles.description}>
        <Image src='https://yt3.ggpht.com/ytc/AMLnZu9W9BmtsaFckXGETbmvsahvSx1FzE3m4xQH5g_z=s176-c-k-c0x00ffffff-no-rj' alt='Goodful thumbnail' layout="intrinsic" height={400} width={400}/>
        <p>10-Minute Meditation For Anxiety</p>
        </div>
    </div>
    )

    }
    




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