import yoga from '../../Library/Yoga';
import VideoList from '../../component/VideoList';

const Yoga = () =>{

    return(
        <div>
            <VideoList array={yoga} pageTitle='Yoga' type={'yoga'}/>
        </div>
    )
}

export default Yoga;