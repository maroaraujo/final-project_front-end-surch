import { nanoid } from 'nanoid';

let stretching = [
    {imgUrl:'https://i.ytimg.com/an_webp/g_tea8ZNk5A/mqdefault_6s.webp?du=3000&sqp=CMC5r5cG&rs=AOn4CLDYluQOAaWv4DoZtKTFc1_ckcElcw',
     videoUrl:'https://www.youtube.com/watch?v=g_tea8ZNk5A',
     title:'15 Min. Full Body Stretch | Daily Routine for Flexibility, Mobility & Relaxation | DAY 7'},

     {imgUrl:'https://i.ytimg.com/an_webp/5Ju3XvZ6S1Q/mqdefault_6s.webp?du=3000&sqp=CIytsJcG&rs=AOn4CLAKjjNHrgFt4sgTcQlUnl7Fm3cybQ',
     videoUrl:'https://www.youtube.com/watch?v=5Ju3XvZ6S1Q',
     title:'15 Min Yoga FULL BODY STRETCH & Deep Relaxation'}
     
];

stretching.forEach(e => e.id=nanoid());

export default stretching;
