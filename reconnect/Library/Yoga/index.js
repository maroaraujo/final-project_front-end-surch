import { nanoid } from 'nanoid';
import healthy from "../../public/images/healthy.jpeg"
import yoga2 from "../../public/images/yoga2.jpeg"

let yoga = [
    {imgUrl: healthy,
     videoUrl:'https://www.youtube.com/watch?v=ZiQh8jA5tVM',
     title:'Healthy Body Yoga - Yoga With Adriene'},
     
     {imgUrl:yoga2,
     videoUrl:'https://www.youtube.com/watch?v=X3-gKPNyrTA',
     title:'Stretches for Neck, Shoulder & Upper Back Pain Relief | 10 min. Yoga to release Tension and Relax'}

]

yoga.forEach(
    e => {e.id=nanoid();
    e.isFavourite=false;});

export default yoga;