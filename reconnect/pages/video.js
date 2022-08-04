import ReactPlayer from 'react-player';
import { useState } from 'react';
import videoList from '../library/videoList'

export default function Video() {

    console.log(videoList)
    
    let url = videoList.meditation[0].videoUrl
    let title = videoList.meditation[0].title

    let initialState = {
        pip: false,
        playing:true, 
        controls: false, 
        light: true, 
        played: 0, 
        loaded: 0
    }

    const [state, setState]= useState(initialState)

    
    
    function handlePlayPause() {
        setState({playing : !state.playing})
    }
    

    
        

    return (
        <>
        <ReactPlayer 
            url={url}
            playing={state.playing} />
        <h1>{title}</h1>
        <button onClick={handlePlayPause}>{state.playing ? 'Pause' : 'Play'}</button>
        </>
    )
    
}