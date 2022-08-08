import { nanoid } from 'nanoid';

let yoga = [
    {imgUrl:'https://i.ytimg.com/an_webp/ZiQh8jA5tVM/mqdefault_6s.webp?du=3000&sqp=CMrwtJcG&rs=AOn4CLA9KU4qA3tOLI3atTa-ZkPlNufyzA',
     videoUrl:'https://www.youtube.com/watch?v=ZiQh8jA5tVM',
     title:'Healthy Body Yoga - Yoga With Adriene'},
     
     {imgUrl:'https://i.ytimg.com/an_webp/s-7lyvblFNI/mqdefault_6s.webp?du=3000&sqp=CObotJcG&rs=AOn4CLBpRzWlo87V9oUZ5jWyQCHVvXEqHg',
     videoUrl:'https://www.youtube.com/watch?v=s-7lyvblFNI',
     title:'Stretches for Neck, Shoulder & Upper Back Pain Relief | 10 min. Yoga to release Tension and Relax'}

]

yoga.forEach(
    e => {e.id=nanoid();
    e.isFavourite=false;});

export default yoga;