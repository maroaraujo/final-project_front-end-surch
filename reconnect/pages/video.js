import VideoDescription from "../component/VideoDescription/index";
import breathing from "../Library/Breathing";
import BackButton from "../component/BackButton/BackButton";

export default function Video() {

    console.log(breathing[0])

    return(
        <>
        <BackButton url='./home' />
        <VideoDescription video={breathing[0]}/>
        </>
    )
    
    
}
/*
        */
