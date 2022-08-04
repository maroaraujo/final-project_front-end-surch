import Head from "next/head";
import styles from "../component/Moodlog/moodlog.module.css";
import { HiArrowLeft } from "react-icons/hi";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import React, { useState } from "react";
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
export default function MoodLog() {
  const { user, error, isLoading } = useUser();
  const [date, setDate] = useState(new Date());
  const [userMood, setUserMood] = useState(dummyData);

  return (
    <div className={styles.moodLogContainer}>
      <Head>
        <title>Reconnect</title>
        <meta name="description" content="Wellness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.moodLogMain}>
        <BackButton url={"/moodtracker"} />
        <h1 className={stylesHome.title}>Mood Log</h1>
        <CloudyBackground />

        <BarChart userMood={userMood} />
        <div className={styles.calendar}>
          <Calendar date={date} setDate={setDate} userMood={userMood} />
        </div>
        <div className={styles.moodOfSelectedDate}>
          <div className={styles.moodOfSelectedTextContainer}>
            <h4>2 Aug 2022</h4>
            <p>I was on the beach</p>
            <p>I was with fam</p>
          </div>
          <div className={styles.moodOfSelectedEmoji}>
            <Image src={awful} alt={"awful"} width={71} height={71}></Image>
          </div>
        </div>
        <div className={stylesHome.spacetoNavBar}></div>
      </main>
    </div>
  );
}
