import { nanoid } from 'nanoid';

let stretching = [
    {imgUrl:'https://i.ytimg.com/an_webp/g_tea8ZNk5A/mqdefault_6s.webp?du=3000&sqp=CKDvtJcG&rs=AOn4CLAgGCj-A2Gxt27sa3iSBbZCnGresQ',
     videoUrl:'https://www.youtube.com/watch?v=g_tea8ZNk5A',
     title:'15 Min. Full Body Stretch | Daily Routine for Flexibility, Mobility & Relaxation | DAY 7'},

     {imgUrl:'https://i.ytimg.com/an_webp/t1rRo6cgM_E/mqdefault_6s.webp?du=3000&sqp=CID9tJcG&rs=AOn4CLA_uFtep8yuh6Z66qK40RLgjddIfw',
     videoUrl:'https://www.youtube.com/watch?v=5Ju3XvZ6S1Q',
     title:'15 Min Yoga FULL BODY STRETCH & Deep Relaxation'}
     
];

stretching.forEach(e => {e.id=nanoid();
                        e.isFavourite=false;});

export default stretching;
