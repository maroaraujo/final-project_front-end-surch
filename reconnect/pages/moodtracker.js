import React from 'react'
import MoodQuestion from '../component/MoodQuestion/MoodQuestion'
import styles from "../styles/Home.module.css";
import stylesMoodTracker from "../component/Moodtracker/moodtracker.module.css";
import CloudyBackground from '../CloudyBackground/CloudyBackground';


function moodtracker() {
  return (
      <div>
    <div className={styles.main}>
    <h1 className={styles.title}>How are <br/>
    you feeling?</h1>
    <CloudyBackground/>
    <MoodQuestion/>
    <h6 className={styles.title}>Please Select</h6>
    <h4 className={styles.title}>What makes you feel this way?</h4>
    <input className ={stylesMoodTracker.input} type="text"/>
    <h4 className={styles.title}>Other notes you would like to add</h4>
    <input className ={stylesMoodTracker.input}type="text"/>
    </div>
    
    </div>
  )
}

export default moodtracker