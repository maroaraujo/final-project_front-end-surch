import VideoDescription from "../../component/VideoDescription/index";
import stretching from "../../Library/Stretching";
import BackButton from "../../component/BackButton/BackButton";

function VideoPlayer() { 

    return(
        <>
        <BackButton url='/stretching' />
        <VideoDescription video={stretching[0]}/>
        </>
    )
    
    
}

export default VideoPlayer;