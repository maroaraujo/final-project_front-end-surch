import Head from "next/head";
import styles from "./moodlog.module.css";
import { HiArrowLeft } from "react-icons/hi";

import { useUser } from "@auth0/nextjs-auth0";
import React from "react";
import BarChart from "../component/BarChart/barChart";
import awful from "../public/images/awful.png";
import bad from "../public/images/bad.png";
import ok from "../public/images/ok.png";
import good from "../public/images/good.png";
import great from "../public/images/great.png";

export default function MoodLog() {
  const { user, error, isLoading } = useUser();
  return (
    <div className={styles.moodLogContainer}>
      <Head>
        <title>Reconnect</title>
        <meta name="description" content="Wellness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.moodLogMain}>
        <article className={styles.moodLogTitleContainer}>
          <span>
            <HiArrowLeft
              size="50"
              color="#000"
              //   onClick={() => }   **** To be updated and add logic for back ****
              className={styles.backButton}
            />
          </span>
          <h1 className={styles.moodLogTitle}>Mood Log</h1>
        </article>

        {/* Code example for other bar Charts */}
        <BarChart
          date1={"3 Aug"}
          date2={"2 Aug"}
          date3={"1 Aug"}
          date4={"31 Jul"}
          date5={"30 Jul"}
          date6={"29 Jul"}
          date7={"28 Jul"}
        />
      </main>
    </div>
  );
}
