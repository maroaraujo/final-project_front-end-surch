import ReactPlayer from 'react-player';
import React from 'react';
import { useState } from 'react';


export default function VideoDescription({video}) {

    const { videoUrl, title } = video

    console.log('url',videoUrl,'title',title)

    let initialState = {
        url: null,
        pip: false,
        playing:true, 
        controls: false, 
        light: true, 
        played: 0, 
        loaded: 0,
        controls:false
    }

    const [state, setState]= useState(initialState)
    
    
    function handlePlayPause() {
        setState({playing : !state.playing})
    }
    
    function handleDuration(duration) {
        console.log('onDuration',duration)
        setState({duration})
    }

    function handlePlayed(played) {
        setState({played})
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
        setState({played})
    }
        
    

    return (
        <>
        <ReactPlayer 
            ref={ref}
            url={videoUrl}
            playing={state.playing}
            onDuration={handleDuration} 
            onProgress={handleProgress}
            onSeek={e => console.log('onSeek', e)}
            
            />
        <h1>{title}</h1>
        <button onClick={handlePlayPause}>{state.playing ? 'Pause' : 'Play'}</button>
        
        <button onClick={handlePlayed}>skip</button>
        <h3>duration:{state.duration}</h3>
        <label for='progress bar'>video progress bar</label>
        {/* <input
            type='range' min={0} max={0.999999} step='any'
            value={state.played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}/> */}
        <progress className='progress_Bar' max={1} value={state.played} />
        </>
    )
    
}
/*
 */
