import { nanoid } from 'nanoid';
import breathing1 from "../../public/images/maxresdefault.jpg" 
import lake from "../../public/images/lake(1).jpg"

let breathing = [
    {imgUrl:lake,
     videoUrl:'https://www.youtube.com/watch?v=F28MGLlpP90',
     title:'15 Minute Deep breathing Exercise | City of Hope'},

     {imgUrl:breathing1,
     videoUrl:'https://www.youtube.com/watch?v=tEmt1Znux58',
     title:'Box breathing relaxation technique: how to calm feelings of stress or anxiety'}

]

breathing.forEach(e => {e.id=nanoid();
                        e.isFavourite=false;});

export default breathing;


