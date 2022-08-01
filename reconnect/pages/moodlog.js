import Head from "next/head";
import Image from "next/image";
import styles from "./moodlog.module.css";
import { HiArrowLeft } from "react-icons/hi";

import { useUser } from "@auth0/nextjs-auth0";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Start of Bar Chart from react-chartjs-2
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "This week's stats",
    },
  },
};

const labels = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const data = {
  labels,
  datasets: [
    {
      label: "User mood by day",
      data: [1, 4, 5, 3, 2, 4, 1],
      backgroundColor: "#85C1E5",
    },
  ],
};

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
        <div className={styles.barChartContainer}>
          <Bar options={options} data={data} />
        </div>
      </main>
    </div>
  );
}
