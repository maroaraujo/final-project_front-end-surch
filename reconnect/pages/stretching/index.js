import stretching from '../../Library/Breathing';
import VideoList from '../../component/VideoList';

const Stretching = () =>{

    return(
        <div>
            <VideoList array={stretching} pageTitle='Stretching Exercises' type={'stretching'}/>
        </div>
    )
}

export default Stretching;