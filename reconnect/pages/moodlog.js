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

export default function MoodLog() {
  const { user, error, isLoading } = useUser();
  const [date, setDate] = useState(new Date());


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

        <BarChart
          date1={"3 Aug"}
          date2={"2 Aug"}
          date3={"1 Aug"}
          date4={"31 Jul"}
          date5={"30 Jul"}
          date6={"29 Jul"}
          date7={"28 Jul"}
        />
        <div className={styles.calendar}>
          <Calendar date={date} setDate={setDate} />
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
