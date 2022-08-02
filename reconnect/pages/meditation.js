import ReactPlayer from 'react-player';
import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react';

export default function Meditation () {

    // const initialState = true 
    // const [state, setState] = useState(initialState);
    // useEffect(() => setIsPlaying(false), [])


    return (
    <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=O-6f5wQXSu8"  />
        <ReactPlayer url="https://www.youtube.com/watch?v=O-6f5wQXSu8"  />
        <ReactPlayer url="https://www.youtube.com/watch?v=O-6f5wQXSu8"  />
        <ReactPlayer url="https://www.youtube.com/watch?v=O-6f5wQXSu8"  />
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