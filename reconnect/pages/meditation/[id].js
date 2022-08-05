import VideoDescription from "../../component/VideoDescription/index";
import meditation from "../../Library/Meditation";
import BackButton from "../../component/BackButton/BackButton";

function VideoPlayer() { 

    return(
        <>
        <BackButton url='/meditation' />
        <VideoDescription video={meditation[0]}/>
        </>
    )
    
    
}

export default VideoPlayer;