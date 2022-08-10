import React, { useState } from "react";
import styles from "./barChart.module.css";
import Image from "next/image";
import awful from "../../public/images/awful.png";
import bad from "../../public/images/bad.png";
import ok from "../../public/images/ok.png";
import good from "../../public/images/good.png";
import great from "../../public/images/great.png";
import { useEffect } from "react";

export default function BarChart(props) {

  function getDateLabel(arrayIndex) {
    const date = props.userMood[arrayIndex].date;

    function toMonthName(monthNumber) {
      const date = new Date();
      date.setMonth(monthNumber - 1);

      return date.toLocaleString("en-US", {
        month: "short",
      });
    }

    const monthNumber = Number(date.slice(5, 7));
    const dateNumber = Number(date.slice(8, 10));
    const monthString = toMonthName(monthNumber);

    const labelDate = dateNumber + " " + monthString;
    return labelDate;
  }


  useEffect(() => {
    // This function is updating the CSS height of the bar depending on the mood
    function setBarHeight(barNumber, arrayIndex) {
      switch (props.userMood[arrayIndex].mood) {
        case "awful":
          document.documentElement.style.setProperty(
            `--bar${barNumber}-height`,
            "23%"
          );
          break;

        case "bad":
          document.documentElement.style.setProperty(
            `--bar${barNumber}-height`,
            "41%"
          );
          break;

        case "ok":
          document.documentElement.style.setProperty(
            `--bar${barNumber}-height`,
            "59%"
          );
          break;

        case "good":
          document.documentElement.style.setProperty(
            `--bar${barNumber}-height`,
            "76%"
          );
          break;

        case "great":
          document.documentElement.style.setProperty(
            `--bar${barNumber}-height`,
            "93%"
          );
          break;
      }
    }

    setBarHeight(1, props.userMood.length - 1);
    setBarHeight(2, props.userMood.length - 2);
    setBarHeight(3, props.userMood.length - 3);
    setBarHeight(4, props.userMood.length - 4);
    setBarHeight(5, props.userMood.length - 5);
    setBarHeight(6, props.userMood.length - 6);
    setBarHeight(7, props.userMood.length - 7);
  }, [props.userMood]);



  return (
    <>
      <h4 className={styles.barChartTitle}>Last Week`s Stats</h4>
      <div className={styles.barChart}>
        <div className={styles.barChart1Container}>
          <div className={styles.bar1Container}>
            <div className={styles.bar1}>
              {/* dummyData.length -1 , date and mood*/}
              <p>{getDateLabel(props.userMood.length - 1)}</p>
            </div>
            <div className={styles.bar2}>
              {/* dummyData.length -2 */}
              <p>{getDateLabel(props.userMood.length - 2)}</p>
            </div>

            <div className={styles.bar3}>
              {/* dummyData.length -3 */}
              <p>{getDateLabel(props.userMood.length - 3)}</p>
            </div>

            <div className={styles.bar4}>
              {/* dummyData.length -4 */}
              <p>{getDateLabel(props.userMood.length - 4)}</p>
            </div>

            <div className={styles.bar5}>
              {/* dummyData.length -5 */}
              <p>{getDateLabel(props.userMood.length - 5)}</p>
            </div>

            <div className={styles.bar6}>
              {/* dummyData.length -6 */}
              <p>{getDateLabel(props.userMood.length - 6)}</p>
            </div>
            <div className={styles.bar7}>
              {/* dummyData.length -7 */}
              <p>{getDateLabel(props.userMood.length - 7)}</p>
            </div>
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
                <Image
                  src={bad}
                  alt={"bad"}
                  width={26.43}
                  height={26.43}
                ></Image>
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
    </>
  );
}
