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
      align: "start",
      labels: {
        boxWidth: 7,
        usePointStyle: true,
        pointStyle: "circle",
        labelString: "another one",
      },
      title: {
        display: true,
        text: "This week's stats",
        color: "#000",
        font: {
          size: 18,
        },
      },
    },
  },
  scales: {
    xAxis: {
      display: false,
    },
    yAxes: [
      {
        max: 5,
      },
    ],
  },
  elements: {
    bar: {
      barPercentage: 0.3,
      categoryPercentage: 1,
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
        {/* Code example for other bar Charts */}
        <div className={styles.barChart}>
          <div className={styles.barChart1Container}>
            <div className={styles.bar1}>
              <p>Mon</p>
            </div>
            <div className={styles.bar2}>
              <p>Tues</p>
            </div>
            <div className={styles.bar3}>
              <p>Wed</p>
            </div>
            <div className={styles.bar4}>
              <p>Thu</p>
            </div>
            <div className={styles.bar5}>
              <p>Fri</p>
            </div>
            <div className={styles.bar6}>
              <p>Sat</p>
            </div>
            <div className={styles.bar7}>
              <p>Sun</p>
            </div>

            <ul className={styles.yAxis}>
              <li>
                <div>Great</div>
              </li>
              <li>
                <div>Good</div>
              </li>
              <li>
                <div>Ok</div>
              </li>
              <li>
                <div>Bad</div>
              </li>
              <li>
                <div>Awful</div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
