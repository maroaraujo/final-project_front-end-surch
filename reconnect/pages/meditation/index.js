import meditation from '../../Library/Meditation';
import VideoList from '../../component/VideoList';

const Breathing = () =>{

    return(
        <div>
            <VideoList array={meditation} pageTitle='Meditation' type={'meditation'}/>
        </div>
    )
}

export default Breathing;