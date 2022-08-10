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
      const response = await fetch(url);
      const data = await response.json();
      console.log("this is data INSIDE TRY", data.payload);
      let randomNumber = Math.floor(Math.random() * data.payload.length)
      setGratitudeData(data.payload[randomNumber].gratitude);
      let date = (data.payload[randomNumber].date).substring(0,10);
      
      setGratitudeDate(formatDate(date));
    } catch (err) {
      const data = "Sorry, we couldn't find the data you wanted.";
      console.log(data);

    }
    getGratitude();
  }, []);

  // SEND NEW GRATITUDE
  function handleChange(e) {
    setTextGratitude(e.target.value);
  }
  console.log("textGratitude", textGratitude);

  function handleClick(e) {
    //console.log("textGratitude", textGratitude);
    let currentDate = new Date().toISOString().slice(0, 10);
    
    console.log("currentDate", currentDate);

    //This is the object that we are sending to the database
    const sendData = {
      "gratitude": textGratitude,
      "date": currentDate,
      "userId": 1,
    };

    async function sendGratitude(data) {
      const response = await fetch(
        "https://reconnect-surch.herokuapp.com/gratitude",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

    }
    sendGratitude(sendData);
  }


  return (
    <div className={styles.gratitudeContainer}>
      <Image layout="fixed" src={brain} height={122} width={124} />
      <div className={styles.gratitudeBox}>
        <p className={stylesGratitude.ptags}>What are you grateful for?</p>
        <div className={stylesGratitude.inputContainer}>
          <input
            className={stylesGratitude.input}
            placeholder="   type here"
            onChange={handleChange}
          ></input>
          <p onClick={handleClick} className={stylesGratitude.addButton}>
            +
          </p>
        </div>
        <p className={stylesGratitude.ptags}>
          {gratitudeDate}
          <br />
          {gratitudeData}
        </p>
      </div>
      <a href={"/gratitudewall"} className={styles.seeAll}>
        see all
      </a>
    </div>
  );
}

export default Gratitude;

