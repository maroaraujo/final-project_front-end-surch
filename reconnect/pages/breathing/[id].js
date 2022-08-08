import VideoDescription from "../../component/VideoDescription/index";
import breathing from "../../Library/Breathing";
import BackButton from "../../component/BackButton/BackButton";

// export const getStaticPaths = async () => {
//     const paths = breathing.map(video => {
//         return {
//             params: { id: video.id.toString() }
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//      const id = context.params.id;
//         myArray.filter(x => x.id === '45');

//     console.log(id)
// }

function VideoPlayer() { 

    return(
        <>
        <BackButton url='/breathing' />
        <VideoDescription video={breathing[0]}/>
        </>
    )
    
    
}

export default VideoPlayer;