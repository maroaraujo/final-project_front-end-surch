import { nanoid } from 'nanoid';

let yoga = [
    {imgUrl:'https://i.ytimg.com/an_webp/ZiQh8jA5tVM/mqdefault_6s.webp?du=3000&sqp=CIXRsJcG&rs=AOn4CLCSvRb9LXgPm62xMrdETryJyqOywQ',
     videoUrl:'https://www.youtube.com/watch?v=ZiQh8jA5tVM',
     title:'Healthy Body Yoga - Yoga With Adriene'},
     
     {imgUrl:'https://i.ytimg.com/an_webp/s-7lyvblFNI/mqdefault_6s.webp?du=3000&sqp=CNLMsJcG&rs=AOn4CLAJwuR62m5h212VkSrV8_0G9_YGBw',
     videoUrl:'https://www.youtube.com/watch?v=s-7lyvblFNI',
     title:'Stretches for Neck, Shoulder & Upper Back Pain Relief | 10 min. Yoga to release Tension and Relax'}

]

yoga.forEach(
    e => {e.id=nanoid();
    e.isFavourite=false;});

export default yoga;