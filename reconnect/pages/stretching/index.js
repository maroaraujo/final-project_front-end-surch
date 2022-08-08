import stretching from '../../Library/Stretching';
import VideoList from '../../component/VideoList';

const Stretching = () =>{

    return(
        <div>
            <VideoList array={stretching} pageTitle='Stretching' type={'stretching'}/>
        </div>
    )
}

export default Stretching;