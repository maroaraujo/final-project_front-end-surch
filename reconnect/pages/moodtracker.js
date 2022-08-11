import React from "react";
import MoodQuestion from "../component/MoodQuestion/MoodQuestion";
import styles from "../styles/Home.module.css";
import stylesMoodTracker from "../component/Moodtracker/moodtracker.module.css";
import CloudyBackground from "../component/CloudyBackground/CloudyBackground.js";
import BackButton from "../component/BackButton/BackButton";
import MoodContext from "../component/MoodContext/MoodContext.js";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

function Moodtracker() {
  const [mood, setMood] = useContext(MoodContext);
  const [why, setWhy] = useState("");
  const [note, setNote] = useState("");

  const router = useRouter();

  let initialMood = {
    isAwful: false,
    isBad: false,
    isOK: false,
    isGreat: false,
    isGood: false,
  };

  function handleWhyChange(e) {
    setWhy(e.target.value);
  }
  function handleNoteChange(e) {
    setNote(e.target.value);
  }

  function handleClick() {
    let currentDate = new Date().toISOString().slice(0, 10);

    let selectedMood;
    if (mood.isAwful === true) {
      selectedMood = "awful";
    }
    if (mood.isBad === true) {
      selectedMood = "bad";
    }
    if (mood.isOK === true) {
      selectedMood = "ok";
    }
    if (mood.isGreat === true) {
      selectedMood = "great";
    }
    if (mood.isGood === true) {
      selectedMood = "good";
    }

    const sendData = {
      date: currentDate,
      mood: selectedMood,
      whatmakesfeel: why,
      notes: note,
      userId: 1,
    };

    async function sendMood(data) {
      const response = await fetch(
        "https://reconnect-surch.herokuapp.com/mood",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
    }
    sendMood(sendData);
    //setGratitudeData([...gratitudeData, sendData])
    setMood(initialMood);
    setWhy("");
    setNote("");
    router.push("/moodlog");
  }

  return (
    <div className={styles.main}>
      <BackButton url={"/home"} />
      <h1 className={styles.title}>
        How are <br />
        you feeling?
      </h1>
      <CloudyBackground />
      <div className={stylesMoodTracker.moodquestion}>
        <MoodQuestion />
      </div>
      <h6 className={styles.subtitle}>Please Select</h6>
      <h4 className={styles.subtitle}>What makes you feel this way?</h4>
      <input
        onChange={handleWhyChange}
        className={stylesMoodTracker.input}
        type="text"
        placeholder="type here ..."
        value={why}
        id="question1"
      />
      <h4 className={styles.subtitle}>Other notes you would like to add</h4>
      <input
        onChange={handleNoteChange}
        className={stylesMoodTracker.input}
        type="text"
        placeholder="type here ..."
        value={note}
        id="question2"
      />
      <button className={styles.button} onClick={handleClick}>
        SEND YOUR MOOD
      </button>
    </div>
  );
}

export default Moodtracker;
