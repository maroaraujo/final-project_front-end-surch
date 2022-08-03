import ReactPlayer from 'react-player';
import meditation from '../library/videoList';
import { useState } from 'react';

export default function Video() {
    
    const [state, setState]= useState(initialState)
    const initialState = {
        url: "",
        pip: false,
        playing:true, 
        controls: false, 
        light: true, 
        played: 0, 
        loaded: 0
    }

    load = url => {

    }

    
        

    return (
        <>
        <ReactPlayer url="https://www.youtube.com/watch?v=O-6f5wQXSu8" />
        
        </>
    )
    
}