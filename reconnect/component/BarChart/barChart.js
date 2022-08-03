import React from "react";
import styles from "./barChart.module.css";
import Image from "next/image";
import awful from "../../public/images/awful.png";
import bad from "../../public/images/bad.png";
import ok from "../../public/images/ok.png";
import good from "../../public/images/good.png";
import great from "../../public/images/great.png";

export default function BarChart(props) {
  return (
    <div className={styles.barChart}>
      <div className={styles.barChart1Container}>
        <div className={styles.bar1Container}>
          {/* <div className={styles.bar1Mood}>
            <Image
              src={props.srcBar1}
              alt={props.altBar1}
              width={26.43}
              height={26.43}
            ></Image>
          </div> */}

          <div className={styles.bar1}>
            <p>{props.date1}</p>
          </div>
          {/* <div className={styles.bar2Mood}>
            <Image
              src={props.srcBar2}
              alt={props.altBar2}
              width={26.43}
              height={26.43}
            ></Image>
          </div> */}

          <div className={styles.bar2}>
            <p>{props.date2}</p>
          </div>
          {/* <div className={styles.bar3Mood}>
            <Image
              src={props.srcBar3}
              alt={props.altBar3}
              width={26.43}
              height={26.43}
            ></Image>
          </div> */}
          <div className={styles.bar3}>
            <p>{props.date3}</p>
          </div>
          {/* <div className={styles.bar4Mood}>
            <Image
              src={props.srcBar4}
              alt={props.altBar4}
              width={26.43}
              height={26.43}
            ></Image>
          </div> */}
          <div className={styles.bar4}>
            <p>{props.date4}</p>
          </div>
          {/* <div className={styles.bar5Mood}>
            <Image
              src={props.srcBar5}
              alt={props.altBar5}
              width={26.43}
              height={26.43}
            ></Image>
          </div> */}
          <div className={styles.bar5}>
            <p>{props.date5}</p>
          </div>
          {/* <div className={styles.bar6Mood}>
            <Image
              src={props.srcBar6}
              alt={props.altBar6}
              width={26.43}
              height={26.43}
            ></Image>
          </div> */}
          <div className={styles.bar6}>
            <p>{props.date6}</p>
          </div>
          {/* <div className={styles.bar7Mood}>
            <Image
              src={props.srcBar7}
              alt={props.altBar7}
              width={26.43}
              height={26.43}
            ></Image> */}
        </div>
        <div className={styles.bar7}>
          <p>{props.date7}</p>
        </div>

        <ul className={styles.yAxis}>
          <li>
            <div className={styles.greatEmoji}>
              <Image
                src={great}
                alt={"great"}
                width={26.43}
                height={26.43}
              ></Image>
            </div>
          </li>
          <li>
            <div className={styles.goodEmoji}>
              <Image
                src={good}
                alt={"good"}
                width={26.43}
                height={26.43}
              ></Image>
            </div>
          </li>
          <li>
            <div className={styles.okEmoji}>
              <Image src={ok} alt={"ok"} width={26.43} height={26.43}></Image>
            </div>
          </li>
          <li>
            <div className={styles.badEmoji}>
              <Image src={bad} alt={"bad"} width={26.43} height={26.43}></Image>
            </div>
          </li>
          <li>
            <div className={styles.awfulEmoji}>
              <Image
                src={awful}
                alt={"awful"}
                width={26.43}
                height={26.43}
              ></Image>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
