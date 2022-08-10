import Image from "next/image";
import brain from "../../public/images/brain.png";
import styles from "../../styles/Home.module.css";
import stylesGratitude from "./Gratitude.module.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function Gratitude() {
  const [gratitudeData, setGratitudeData] = useState([]);
  const [gratitudeDate, setGratitudeDate] = useState("");
  const [textGratitude, setTextGratitude] = useState("");
  //Will need a get request to get latest entry and display on screen.
  //setGratitude will then be rendered on the page with the date
  function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];
  
    return day+'/'+month+'/'+year;
  }
  
  useEffect(() => {
  async function getGratitude() {
    console.log("Inside Axios to get gratitude");
    try {
      const url = "https://reconnect-surch.herokuapp.com/gratitude";
      //console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      console.log("this is data INSIDE TRY", data.payload);
      //const responseData = responseJSON.payload;
      let randomNumber = Math.floor(Math.random() * data.payload.length)
      setGratitudeData(data.payload[randomNumber].gratitude);
      let date = (data.payload[randomNumber].date).substring(0,10);
      
      setGratitudeDate(formatDate(date));

    } catch (err) {
      const data = "Sorry, we couldn't find the data you wanted.";
      console.log(data);
    }
  }
  getGratitude();
   }, []);
  // its working
  console.log("gratitudeData", gratitudeData);

//   let randomNumber = Math.floor(Math.random() * gratitudeData.length);

//   console.log("id", randomNumber)
  // const fetchGratitude = async () => {
  //     try{
  //         let url = backendURL/latest entry
  //         let response = await fetch(url)
  //         let data = response.json();
  //         setGratitude(data.text)
  //         setDate(data.date)
  //         //need to check shape of the response object first
  //         //with console.logs.
  //     }
  // }

  // Axios.get("https://reconnect-surch.herokuapp.com/gratitude").then(
  //   (response) => {
  //     console.log("data recieved", response.data.payload);
  //     let result = response.data.payload
  //     //recievedGratitude.push(response.data.payload)
  //     setGratitudeData(result);
  //     console.log("whole response", response)
  //     console.log("INSIDE AXIOS this is the usestate", gratitudeData)

  //   }
  // );
  // console.log("this is the usestate", gratitudeData)

  //SEND NEW GRATITUDE
  //   function handleClick(e) {
  //     console.log(textGratitude);

  //     Axios.post("https://reconnect-surch.herokuapp.com/gratitude", {
  //       gratitude: textGratitude,
  //       date: new Date(),
  //       userId: 1,
  //     }).then((response) => {
  //       console.log(response);
  //     });
  //     setTextGratitude("");
  //   }

  //   function handleChange(e) {
  //     setTextGratitude(e.target.value);
  //   }

  //Get a random gratitude for the home page
  /*
  
  
  let randomGratitudeText = "";
  //useEffect(() => {
  async function randomGratitude() {
    let id = Math.floor(Math.random() * gratitudeData.length);
    //console.log("gratitudeData inside randomGratitude", gratitudeData);
    console.log("id", id)
    //console.log("gratitudeData[0].gratitude", gratitudeData[0])
    //randomGratitudeText = gratitudeData[id].gratitude;
    console.log("random recieved gratitude", randomGratitudeText);
    return randomGratitudeText;
  }

  
    randomGratitude();

    */
  // }, []);

  //console.log('recieved gratitude', recievedGratitude)




  return (
    <div className={styles.gratitudeContainer}>
      <Image layout="fixed" src={brain} height={122} width={124} />
      <div className={styles.gratitudeBox}>
        <p className={stylesGratitude.ptags}>What are you grateful for?</p>
        <div className={stylesGratitude.inputContainer}>
          <input
            className={stylesGratitude.input}
            placeholder="   type here"
            // handleChange={handleChange}
          ></input>
          <p
            //onClick={handleClick}
            className={stylesGratitude.addButton}
          >
            +
          </p>
        </div>
        <p className={stylesGratitude.ptags}>{gratitudeDate}<br/>{gratitudeData}</p>
      </div>
      <a href={"/gratitudewall"} className={styles.seeAll}>
        see all
      </a>
    </div>
  );
}

export default Gratitude;

/* 


import Image from "next/image";
import brain from "../../public/images/brain.png"
import styles from "../../styles/Home.module.css"
import stylesGratitude from "./Gratitude.module.css"
import {useState} from "react"
import { Router } from "next/router";
export default function Gratitude(){
    
    
    const fetchGratitude = async () => {
        try{
            let url = backendURL/latest entry
            let response = await fetch(url)
            let data = response.json();
            setGratitude(data.text)
            setDate(data.date)
            //need to check shape of the response object first
            //with console.logs.
        }
    }
    
    
    return(
        <div className={styles.gratitudeContainer}>
          <Image layout="fixed" src={brain} height={122} width={124}/>
            <div className={styles.gratitudeBox}>
                <p className={stylesGratitude.ptags}>What are you grateful for?</p>
                    <div className={stylesGratitude.inputContainer}>
                        <input onChange={handleChange} className={stylesGratitude.input}placeholder="type here"></input>
                        <p onClick={handleClick} className={stylesGratitude.addButton}>+</p>
                    </div>
                <p className={stylesGratitude.ptags}>date | reason</p>
            </div>
            <a href={"https://reconnect-surch.netlify.app/gratitudewall"} className={styles.seeAll}>see all</a>
        </div>
    )
}
raised_hands::skin-tone-2
eyes
white_check_mark



*/
