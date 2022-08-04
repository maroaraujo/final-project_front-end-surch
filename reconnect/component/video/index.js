import React from "react";
import Image from "next/image";
import { Router } from "next/router";

export default function Video({imgUrl,title,id,description}) {

    function handleClick() {
        Router.push('./'+id)
    }
    return(
        <div>
        <Image 
        src={imgUrl}
        alt={title + 'thumbnail'}
        // layout={}
        // height={}
        // width={}
        onClick={handleClick}/>
        <h4>
         {title}
        </h4>
        <p>
            {description || null}
        </p>
        </div>
    )
}