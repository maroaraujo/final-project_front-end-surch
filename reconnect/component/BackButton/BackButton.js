import React from 'react'
import styles from "../../styles/Home.module.css";
import Image from 'next/image';
import ArrowBack from "../../public/images/backButton.png"
import styleButton from "../BackButton/BackButton.module.css"
import {useRouter} from "next/router"

function BackButton(props) {
    const router = useRouter();

    function handleClick(){
       router.push(props.url)}
    
    return (
        <div className={styleButton.backbutton}>
        <Image src={ArrowBack} height={55} width={55}
        onClick={handleClick}></Image>
        </div>
        )
}

export default BackButton
