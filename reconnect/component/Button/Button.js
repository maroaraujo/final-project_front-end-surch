import React from 'react'
import styles from "../../styles/Home.module.css";
import Link from "next/link"

function Button(props) {
  return (
    <button className={styles.button}>
   <Link href={props.link}>{props.text}</Link></button>
  )
}

export default Button