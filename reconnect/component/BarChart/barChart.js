import React, { useState } from "react";
import styles from "./barChart.module.css";
import Image from "next/image";
import awful from "../../public/images/awful.png";
import bad from "../../public/images/bad.png";
import ok from "../../public/images/ok.png";
import good from "../../public/images/good.png";
import great from "../../public/images/great.png";
import { useEffect } from "react";

const dummyData = [
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

const moodCSSHeight = {
  awful: "23%",
  bad: "41%",
  ok: "59%",
  good: "76%",
  great: "93%",
};

export default function BarChart(props) {
  const [userMood, setUserMood] = useState(dummyData);
  //fetch the data
  // extract the mood of the
  //if statement for the type of mood
  //compare different mood and return the right height
  useEffect(() => {
    // This function is updating the CSS height of the bar depending on the mood
    function setBarHeight(barNumber, arrayIndex) {
      switch (userMood[arrayIndex].mood) {
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

    setBarHeight(1, userMood.length - 1);
    setBarHeight(2, userMood.length - 2);
    setBarHeight(3, userMood.length - 3);
    setBarHeight(4, userMood.length - 4);
    setBarHeight(5, userMood.length - 5);
    setBarHeight(6, userMood.length - 6);
    setBarHeight(7, userMood.length - 7);
  }, [userMood]);

  function getDate(arrayIndex) {
    const date = userMood[arrayIndex].date;

    function toMonthName(monthNumber) {
      const date = new Date();
      date.setMonth(monthNumber - 1);

      return date.toLocaleString("en-US", {
        month: "short",
      });
    }

const month = date.chartAt(6,7)
console.log(month)

    
  }

  // the function below is to format the date for the calendar
  // function getCalendarDate() {
  //   const maxDate = userMood[userMood.length].date;
  //   const minDate = userMood[0].date;

  //   maxDate.replace(/-/g, ", ");
  //   minDate.replace(/-/g, ", ");
  // }

  return (
    <>
      <h4 className={styles.barChartTitle}>Last Week's Stats</h4>
      <div className={styles.barChart}>
        <div className={styles.barChart1Container}>
          <div className={styles.bar1Container}>
            <div className={styles.bar1}>
              {/* dummyData.length -1 , date and mood*/}
              <p>{getDate(userMood.length - 1)}</p>
            </div>

            <div className={styles.bar2}>
              {/* dummyData.length -2 */}
              <p>{getDate(userMood.length - 2)}</p>
            </div>

            <div className={styles.bar3}>
              {/* dummyData.length -3 */}
              <p>{getDate(userMood.length - 3)}</p>
            </div>

            <div className={styles.bar4}>
              {/* dummyData.length -4 */}
              <p>{getDate(userMood.length - 4)}</p>
            </div>

            <div className={styles.bar5}>
              {/* dummyData.length -5 */}
              <p>{getDate(userMood.length - 5)}</p>
            </div>

            <div className={styles.bar6}>
              {/* dummyData.length -6 */}
              <p>{getDate(userMood.length - 6)}</p>
            </div>
          </div>
          <div className={styles.bar7}>
            {/* dummyData.length -7 */}
            <p>{getDate(userMood.length - 7)}</p>
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
