import React from "react";
import Image from "next/image";
import { Router } from "next/router";
import stylesvideo from "../../styles/video.module.css";

export default function Video({imgUrl,title,id,description}) {

    const imageSize = { width: 1280, height: 720, layout: "intrinsic" };

    function handleClick() {
        Router.push('./'+id)
    }
    
    
    return(
        <div>
        <Image 
        src={imgUrl}
        alt={title + 'thumbnail'}
        layout={imageSize.layout}
        height={imageSize.height}
        width={imageSize.width}
        onClick={handleClick}/>
        <h4 className={stylesvideo.h4}>
         {title}
        </h4>
        <p className={stylesvideo.p}>
            {description || null}
        </p>
        </div>
    )
}