import React from 'react'
import MoodQuestion from '../component/MoodQuestion/MoodQuestion'
import styles from "../styles/Home.module.css";
import stylesMoodTracker from "../component/Moodtracker/moodtracker.module.css";
import CloudyBackground from '../CloudyBackground/CloudyBackground';
import Button from '../component/Button/Button';
import BackButton from '../component/BackButton/BackButton';


function moodtracker() {
  return (
    <div className={styles.main}>
    <BackButton url={"https://reconnect-surch.netlify.app/home"}/>
    <h1 className={styles.title}>How are <br/>
    you feeling?</h1>
    <CloudyBackground/>
    <MoodQuestion/>
    <h6 className={styles.subtitle}>Please Select</h6>
    <h4 className={styles.subtitle}>What makes you feel this way?</h4>
    <input className ={stylesMoodTracker.input} type="text" placeholder="type here ..."/>
    <h4 className={styles.subtitle}>Other notes you would like to add</h4>
    <input className ={stylesMoodTracker.input} type="text" placeholder="type here ..."/>
    <Button text="SEND YOUR MOOD" link="https://reconnect-surch.netlify.app/home"/>
    </div>
    
    
  )
}

export default moodtracker