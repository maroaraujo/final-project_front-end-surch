import breathing from '../../Library/Breathing';
import VideoList from '../../component/VideoList';

const Breathing = () =>{

    return(
        <div>
            <VideoList array={breathing} pageTitle='Breathing' type={'breathing'}/>
        </div>
    )
}

export default Breathing;