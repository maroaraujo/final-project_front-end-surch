import React from "react";
import styles from "./barChart.module.css";
import Image from "next/image";

export default function BarChart(props) {
  return (
    <div className={styles.barChart}>
      <div className={styles.barChart1Container}>
        <div className={styles.bar1Container}>
          <div className={styles.bar1Mood}>
            <Image
              src={props.srcBar1}
              alt={props.altBar1}
              width={26.43}
              height={26.43}
            ></Image>
          </div>

          <div className={styles.bar1}>
            <p>Mon</p>
          </div>
          <div className={styles.bar2Mood}>
            <Image
              src={props.srcBar2}
              alt={props.altBar2}
              width={26.43}
              height={26.43}
            ></Image>
          </div>

          <div className={styles.bar2}>
            <p>Tues</p>
          </div>
          <div className={styles.bar3Mood}>
            <Image
              src={props.srcBar3}
              alt={props.altBar3}
              width={26.43}
              height={26.43}
            ></Image>
          </div>
          <div className={styles.bar3}>
            <p>Wed</p>
          </div>
          <div className={styles.bar4Mood}>
            <Image
              src={props.srcBar4}
              alt={props.altBar4}
              width={26.43}
              height={26.43}
            ></Image>
          </div>
          <div className={styles.bar4}>
            <p>Thu</p>
          </div>
          <div className={styles.bar5Mood}>
            <Image
              src={props.srcBar5}
              alt={props.altBar5}
              width={26.43}
              height={26.43}
            ></Image>
          </div>
          <div className={styles.bar5}>
            <p>Fri</p>
          </div>
          <div className={styles.bar6Mood}>
            <Image
              src={props.srcBar6}
              alt={props.altBar6}
              width={26.43}
              height={26.43}
            ></Image>
          </div>
          <div className={styles.bar6}>
            <p>Sat</p>
          </div>
          <div className={styles.bar7Mood}>
            <Image
              src={props.srcBar7}
              alt={props.altBar7}
              width={26.43}
              height={26.43}
            ></Image>
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
    </div>
  );
}
