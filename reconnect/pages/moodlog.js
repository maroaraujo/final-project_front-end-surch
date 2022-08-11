import Head from "next/head";
import styles from "../component/Moodlog/moodlog.module.css";
import { HiArrowLeft } from "react-icons/hi";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import React, { useState, useEffect, useContext } from "react";
import BarChart from "../component/BarChart/barChart";
import awful from "../public/images/awful.png";
import bad from "../public/images/bad.png";
import ok from "../public/images/ok.png";
import good from "../public/images/good.png";
import great from "../public/images/great.png";
import Calendar from "../component/Calendar/Calendar";
import BackButton from "../component/BackButton/BackButton";
import CloudyBackground from "../component/CloudyBackground/CloudyBackground";
import stylesHome from "../styles/Home.module.css";
import DatePicker from "sassy-datepicker";
import UserMoodContext from "../component/UserMoodContext/UserMoodContext.js";

//
export default function MoodLog() {
  const { user, error, isLoading } = useUser();
  const [date, setDate] = useState(new Date());
  const [userMood, setUserMood] = useContext(UserMoodContext);
  //const [counter, setCounter] = useState(0)

  //fetch mood data

  useEffect(() => {
    async function getMood() {
      console.log("Inside the get request mood");
      try {
        const url = "https://reconnect-surch.herokuapp.com/mood";
        //console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log("this is data INSIDE get mood fetch", data.payload);
        setUserMood([...data.payload]);
      } catch (err) {
        const data = "Sorry, we couldn't find the data you wanted.";
        console.log(data);
      }
    }
    getMood();
    //setCounter(counter++)
  }, []);

  console.log("userMood", userMood);

  let notesArray = [];

  // This function is going to change the date of the calendar to compare with the database date format
  function compareData() {
    // format of the calendar date is 2022, 07, 27
    let selectedDate = date.toLocaleDateString("en-GB"); // it is coming in this format 04/08/2022

    //comparable date
    let yearFirst = selectedDate.slice(6);
    let monthSecond = selectedDate.slice(3, 5);
    let dateThird = selectedDate.slice(0, 2);
    let comparableDate = yearFirst + "-" + monthSecond + "-" + dateThird;
    console.log("comparabledate", comparableDate);
    console.log("usermooddate", userMood[3].date.slice(0, 12));
    for (let i = 0; i < userMood.length; i++) {
      if (comparableDate === userMood[i].date.slice(0, 10))
        notesArray = [
          userMood[i].whatmakesfeel,
          userMood[i].notes,
          userMood[i].mood,
        ];
    }
    return notesArray;
  }

  compareData();

  console.log("notesArray", notesArray);

  let moodEmoji = great;
  if (notesArray[2] === "awful") {
    moodEmoji = awful;
  }
  if (notesArray[2] === "bad") {
    moodEmoji = bad;
  }
  if (notesArray[2] === "ok") {
    moodEmoji = ok;
  }
  if (notesArray[2] === "good") {
    moodEmoji = good;
  }
  if (notesArray[2] === "great") {
    moodEmoji = great;
  }
  return (
    <div className={styles.moodLogContainer}>
      <Head>
        <title>Reconnect</title>
        <meta name="description" content="Wellness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.moodLogMain}>
        <BackButton url={"/home"} />
        <h1 className={stylesHome.title}>Journal</h1>

        <CloudyBackground />
        {userMood[0].date !== "2022-01-01" && (
          <>
            <BarChart userMood={userMood} />
            <div className={styles.calendar}>
              <Calendar date={date} setDate={setDate} userMood={userMood} />
            </div>
          </>
        )}
        <div className={styles.moodOfSelectedDate}>
          <h4>{date.toLocaleDateString("en-GB")}</h4>

          {notesArray[2] ? (
            <div>
              <div className={styles.moodOfSelectedEmoji}>
                <Image
                  src={moodEmoji}
                  alt={"hi"}
                  width={71}
                  height={71}
                ></Image>
              </div>
              <div className={styles.moodOfSelectedTextContainer}>
                <p>{notesArray[0]}</p>
                <p>{notesArray[1]}</p>
              </div>
            </div>
          ) : (
            <p className={styles.moodOfSelectedTextContainer}>
              You have no entry for this day
            </p>
          )}
        </div>
        <div className={stylesHome.spacetoNavBar}></div>
        {console.log("datapicker object", date)}
      </main>
    </div>
  );
}
