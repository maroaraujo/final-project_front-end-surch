import ReactPlayer from 'react-player';
import React from 'react';
import { useState } from 'react';
import styles from "../../styles/video.module.css"
import Image from 'next/image';
import backgroundImage from "../../public/images/Media Player Background.png"
import playbutton from "../../public/images/MediaPlayButton.png"
import pausebutton from "../../public/images/MediaPauseButton.png"
import skip15forward from "../../public/images/MediaSkipButton.png"
import skip15backward from "../../public/images/MediaSkipBackButton.png"


export default function VideoDescription({video}) {

    let { videoUrl, title, isFavourite} = video

    let initialState = {
        url: null,
        pip: false,
        playing:true, 
        controls: false, 
        light: true, 
        played: 0, 
        loaded: 0,
        controls:false,
    }

    const [state, setState] = useState(initialState)
    const [isLiked, setLiked] = useState(isFavourite)
    
    function handlePlayPause() {
        setState({ playing : !state.playing })
    }
    
    function handleDuration(duration) {
        console.log('onDuration',duration)
        setState({ duration })
    }

    function handlePlayed(played) {
        setState({ played })
    }

    function handleProgress(state) {
        console.log('onProgress',state)
        if (!state.seeking) {setState(state)}
    }

    function handleSeekMouseDown(e) {
        setState({ seeking: true })
    }

    function handleSeekMouseUp(e) {
        setState({ seeking: false})
        player.seekTo(parseFloat(e.target.value))
        
    }

    function handleSeekChange(e) {
        setState({ played: parseFloat(e.target.value) })
    }

    function ref(player) {
        player=player
    }

    function handlePlayed(played) {
        setState({ played })
    }
    
    function handleLiked() {
        setLiked(!isLiked)
        isFavourite = isLiked;
        // video.isFavourite = state.favourite;
        console.log('isLiked',isLiked,'isFavourite',isFavourite)
    }
    

    return (
        <div>
        <div className={styles.backgroundImage}>
      <Image
        alt="MediaPlayerBackground"
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      
    </div>
        <ReactPlayer 
            className={styles.video_player}
            ref={ref}
            url={videoUrl}
            playing={state.playing}
            onDuration={handleDuration} 
            onProgress={handleProgress}
            onSeek={e => console.log('onSeek', e)}
            
            />
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.mediabutton}>
        <Image src={skip15forward} alt="skipforward" onClick={handlePlayed}/>
        <Image src={state.playing ? pausebutton : playbutton} alt="playbutton" onClick={handlePlayPause}/>
        <Image src={skip15backward} alt="skipback" onClick={handlePlayed}/>
        </div>
        
        </div>
    )
    
}
/*<button onClick={handleLiked}>{ isLiked ? 'Unlike' : 'Like' }</button>
        <h3>duration:{state.duration}</h3>
        
        {/* <input
            type='range' min={0} max={0.999999} step='any'
            value={state.played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}/> 
            <progress className='progress_Bar' max={1} value={state.played} /> */
