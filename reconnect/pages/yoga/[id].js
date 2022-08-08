import VideoDescription from "../../component/VideoDescription/index";
import yoga from "../../Library/Yoga";
import BackButton from "../../component/BackButton/BackButton";

function VideoPlayer() { 

    return(
        <>
        <BackButton url='/yoga' />
        <VideoDescription video={yoga[0]}/>
        </>
    )
    
    
}

export default VideoPlayer;