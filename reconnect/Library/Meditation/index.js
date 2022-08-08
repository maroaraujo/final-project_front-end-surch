import { nanoid } from 'nanoid';

let meditation = [
    {imgUrl : 'https://i.ytimg.com/vi/O-6f5wQXSu8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBajCqSN4D6cgnZT8SnZ-RcV0ILNg',
    videoUrl : 'https://www.youtube.com/watch?v=O-6f5wQXSu8',
    title : '10-Minute Meditation For Anxiety' },

    {imgUrl : 'https://i.ytimg.com/an_webp/ZToicYcHIOU/mqdefault_6s.webp?du=3000&sqp=CJi3sJcG&rs=AOn4CLBXw2jZhdHXEwkpe4Uv7o2iFj1OGQ',
    videoUrl : 'https://www.youtube.com/watch?v=ZToicYcHIOU',
    title : 'Daily Calm | 10 Minute Mindfulness Meditation | Be Present'}
    
]

meditation.forEach(e => {e.id=nanoid();
e.isFavourite=false;});

export default meditation
