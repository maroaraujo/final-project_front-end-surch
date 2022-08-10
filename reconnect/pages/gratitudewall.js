import Image from "next/image";
import BackButton from "../component/BackButton/BackButton";
import Button from "../component/Button/Button";
import stylesgratitudewall from "../component/GratitudeWall/gratitudewall.module.css"
import gratitudebackground from "../public/images/GratitudeBackGround1.png"
import styles from "../styles/Home.module.css"
import {useState, useEffect} from "react"


export default function gratitudewall() {
    const [gratitudeData, setGratitudeData] = useState([]);

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
            setGratitudeData(data.payload);
            
          } catch (err) {
            const data = "Sorry, we couldn't find the data you wanted.";
            console.log(data);
          }
        }
        getGratitude();
         }, []);
        // its working
        console.log("gratitudeData", gratitudeData);


    return (
        <div className={styles.main}>
        <BackButton url={"https://reconnect-surch.netlify.app/home"}/>
        <h1 className={styles.title}>Gratitude Wall</h1>
        <div className={stylesgratitudewall.background}>
            <Image
              alt="GratitudeBackground"
              src={gratitudebackground}
              layout="fill"
              objectFit="cover"
              quality={100}
            />  
        </div>
        
        <h4 className={stylesgratitudewall.subtitle}>What are you grateful for?</h4>
        <input className={stylesgratitudewall.input} type="text" placeholder="type here"></input>
        <Button text="Save Gratitude" link="addsavelinkhere"/>
        <h4 className={stylesgratitudewall.subtitle2}>Gratitude diary</h4>
        <div className={stylesgratitudewall.gratitudeDisplay}>
        {gratitudeData.map(function(gratitude){
          return(
            <p >{formatDate(gratitude.date.slice(0, 10))} - {gratitude.gratitude}</p>
          )
        })}
        </div>
        <div className={styles.spacetoNavBar}></div>
        </div>
    )
}