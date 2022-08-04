import { nanoid } from 'nanoid';

const meditation = [
    {imgUrl : 'https://i.ytimg.com/vi/O-6f5wQXSu8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBajCqSN4D6cgnZT8SnZ-RcV0ILNg',
    videoUrl : 'https://www.youtube.com/watch?v=O-6f5wQXSu8',
    title : '10-Minute Meditation For Anxiety' },

    {imgUrl : 'https://i.ytimg.com/an_webp/syx3a1_LeFo/mqdefault_6s.webp?du=3000&sqp=CICbqZcG&rs=AOn4CLCq6XOilRgWwxP3rZNCz7J4zwCo0Q',
    videoUrl : 'https://www.youtube.com/watch?v=syx3a1_LeFo',
    title : 'Daily Calm | 10 Minute Mindfulness Meditation | Letting Go'}
]

const breathing = [
    {imgUrl:'',
     videoUrl:'',
     title:''},

     {imgUrl:'',
     videoUrl:'',
     title:''}

]

const stretching = [
    {imgUrl:'',
     videoUrl:'',
     title:''},

     {imgUrl:'',
     videoUrl:'',
     title:''},
    ]

const yoga = [
    {imgUrl:'',
     videoUrl:'',
     title:''},
     
     {imgUrl:'',
     videoUrl:'',
     title:''},
    ]

let videoList = {};

breathing.map(e => e.id=nanoid())
yoga.map(e => e.id=nanoid())
stretching.map(e => e.id=nanoid())
meditation.map(e => e.id=nanoid())

export default videoList = {breathing, yoga, stretching, meditation}



