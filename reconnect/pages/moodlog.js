import Head from "next/head";
import styles from "../component/Moodlog/moodlog.module.css";
import { HiArrowLeft } from "react-icons/hi";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import React, { useState, useEffect } from "react";
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

const dummyData = [
  {
    id: "0",
    date: "2022-07-27",
    mood: "great",
    whatmakesfeel: "I was on the beach",
    notes: "I was with family",
  },
  {
    id: "1",
    date: "2022-07-28",
    mood: "great",
    whatmakesfeel: "I was on the beach",
    notes: "I was with family",
  },
  {
    date: "2022-07-29",
    mood: "bad",
    whatmakesfeel: "cough covid",
    notes: "",
  },
  {
    date: "2022-07-30",
    mood: "ok",
    whatmakesfeel: "pains",
    notes: "didn't eat much",
  },
  {
    date: "2022-07-31",
    mood: "ok",
    whatmakesfeel: "",
    notes: "",
  },
  {
    date: "2022-08-01",
    mood: "good",
    whatmakesfeel: "getting better",
    notes: "",
  },
  {
    date: "2022-08-02",
    mood: "great",
    whatmakesfeel: "I was on the beach again",
    notes: "made some friends",
  },
  {
    date: "2022-08-03",
    mood: "awful",
    whatmakesfeel: "my friends cough covid",
    notes: "my fault",
  },
  {
    date: "2022-08-04",
    mood: "ok",
    whatmakesfeel: "testing",
    notes: "my fault",
  },
];
//
export default function MoodLog() {
  const { user, error, isLoading } = useUser();
  const [date, setDate] = useState(new Date());
  const [userMood, setUserMood] = useState(dummyData);

  let notesArray = [];

  // This function is going to change the date of the calendar to compare with the database date format
  function compareData() {
    let selectedDate = date.toLocaleDateString("en-GB"); // it is coming in this format 04/08/2022
    //comparable date 2022-08-03
    let yearFirst = selectedDate.slice(6);
    let monthSecond = selectedDate.slice(3, 5);
    let dateThird = selectedDate.slice(0, 2);
    let comparableDate = yearFirst + "-" + monthSecond + "-" + dateThird;
    console.log("comparabledate", comparableDate);

    for (let i = 0; i < dummyData.length; i++) {
      if (comparableDate === dummyData[i].date)
        notesArray = [
          dummyData[i].whatmakesfeel,
          dummyData[i].notes,
          dummyData[i].mood,
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

        <BackButton url={"https://reconnect-surch.netlify.app/home"} />
        <h1 className={stylesHome.title}>Journal</h1>

        <CloudyBackground />

        <BarChart userMood={userMood} />
        <div className={styles.calendar}>
          <Calendar date={date} setDate={setDate} userMood={userMood} />
        </div>
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
