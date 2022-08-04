import VideoDescription from "../component/VideoDescription/index";
import breathing from "../Library/Breathing"

export default function Video() {
    
    let url = breathing[0].videoUrl;
    let title = breathing[0].title
    

    return(
        
        <VideoDescription video={breathing[0]}/>
    )
    
    
}
/*
        */
