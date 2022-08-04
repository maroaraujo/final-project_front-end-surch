import React from "react";
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
    date: "2022, 07, 28",
    mood: "great",
    whatmakesfeel: "I was on the beach",
    notes: "I was with family",
  },
  {
    date: "29/07/2022",
    mood: "bad",
    whatmakesfeel: "cough covid",
    notes: "",
  },
  {
    date: "30/07/2022",
    mood: "ok",
    whatmakesfeel: "pains",
    notes: "didn't eat much",
  },
  {
    date: "31/07/2022",
    mood: "ok",
    whatmakesfeel: "",
    notes: "",
  },
  {
    date: "1/08/2022",
    mood: "good",
    whatmakesfeel: "getting better",
    notes: "",
  },
  {
    date: "2/08/2022",
    mood: "great",
    whatmakesfeel: "I was on the beach again",
    notes: "made some friends",
  },
  {
    date: "2022, 08, 03",
    mood: "bad",
    whatmakesfeel: "my friends cough covid",
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
  //fetch the data
  // extract the mood of the
  //if statement for the type of mood
  //compare different mood and return the right height
  useEffect(() => {
    const bar1Height = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--bar1-height");

    const bar2Height = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--bar2-height");

    const bar3Height = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--bar3-height");

    const bar4Height = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--bar4-height");

    const bar5Height = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--bar5-height");

    const bar6Height = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--bar6-height");

    const bar7Height = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--bar7-height");
  }, []);

  function setBarHeight(barNumber, arrayIndex, mood) {
    if (dummyData[arrayIndex].mood === mood) {
      document.documentElement.style.setProperty(
        `--bar${barNumber}-height`,
        "23%"
      );
    }

    // switch (dummyData[arrayIndex].mood) {
    //   case "awful":
    //     document.documentElement.style.setProperty(
    //       `--bar${barNumber}-height`,
    //       "23%"
    //     );
    //     break;

    //   case "bad":
    //     document.documentElement.style.setProperty(
    //       `--bar${barNumber}-height`,
    //       "41%"
    //     );
    //     break;

    //   case "ok":
    //     document.documentElement.style.setProperty(
    //       `--bar${barNumber}-height`,
    //       "59%"
    //     );
    //     break;

    //   case "good":
    //     document.documentElement.style.setProperty(
    //       `--bar${barNumber}-height`,
    //       "76%"
    //     );
    //     break;

    //   case "great":
    //     document.documentElement.style.setProperty(
    //       `--bar${barNumber}-height`,
    //       "93%"
    //     );
    //     break;
  }

  setBarHeight(1, 6);

  return (
    <>
      <h4 className={styles.barChartTitle}>Last Week's Stats</h4>
      <div className={styles.barChart}>
        <div className={styles.barChart1Container}>
          <div className={styles.bar1Container}>
            <div className={styles.bar1}>
              {/* dummyData.length -1 , date and mood*/}
              <p>{props.date1}</p>
            </div>

            <div className={styles.bar2}>
              {/* dummyData.length -2 */}
              <p>{props.date2}</p>
            </div>

            <div className={styles.bar3}>
              {/* dummyData.length -3 */}
              <p>{props.date3}</p>
            </div>

            <div className={styles.bar4}>
              {/* dummyData.length -4 */}
              <p>{props.date4}</p>
            </div>

            <div className={styles.bar5}>
              {/* dummyData.length -5 */}
              <p>{props.date5}</p>
            </div>

            <div className={styles.bar6}>
              {/* dummyData.length -6 */}
              <p>{props.date6}</p>
            </div>
          </div>
          <div className={styles.bar7}>
            {/* dummyData.length -7 */}
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
