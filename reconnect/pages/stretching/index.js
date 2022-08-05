import stretching from '../../Library/Breathing';
import VideoList from '../../component/VideoList';

const Stretching = () =>{

    return(
        <div>
            <VideoList array={breathing} pageTitle='Breathing Exercises' type={'breathing'}/>
        </div>
    )
}

export default Stretching;