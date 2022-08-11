import { nanoid } from 'nanoid';
import stretching1 from "../../public/images/Stretching1.jpg";
import stretching2 from "../../public/images/stretching2.jpg"

let stretching = [
    {imgUrl:stretching1,
     videoUrl:'https://www.youtube.com/watch?v=g_tea8ZNk5A',
     title:'15 Min. Full Body Stretch | Daily Routine for Flexibility, Mobility & Relaxation | DAY 7'},

     {imgUrl:stretching2,
     videoUrl:'https://www.youtube.com/watch?v=5Ju3XvZ6S1Q',
     title:'15 Min Yoga FULL BODY STRETCH & Deep Relaxation'}
     
];

stretching.forEach(e => {e.id=nanoid();
                        e.isFavourite=false;});

export default stretching;
