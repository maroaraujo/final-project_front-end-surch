import Image from "next/image";
import brain from "../../public/images/brain.png";
import styles from "../../styles/Home.module.css";
import stylesGratitude from "./Gratitude.module.css";
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
    try {
      const url = "https://reconnect-surch.herokuapp.com/gratitude";
      const response = await fetch(url);
      const data = await response.json();
      let randomNumber = Math.floor(Math.random() * data.payload.length)
      setGratitudeData(data.payload[randomNumber].gratitude);
      let date = (data.payload[randomNumber].date).substring(0,10);
      
      setGratitudeDate(formatDate(date));
    } catch (err) {
      const data = "Sorry, we couldn't find the data you wanted.";

    }}
    getGratitude();
  }, []);


  // SEND NEW GRATITUDE
  function handleChange(e) {
    setTextGratitude(e.target.value);
  }

  function handleClick(e) {
    //console.log("textGratitude", textGratitude);
    let currentDate = new Date().toISOString().slice(0, 10);

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
    setTextGratitude("");
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
            value={textGratitude}
          ></input>
          <button onClick={handleClick} className={stylesGratitude.addButton}>
            +
          </button>
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

