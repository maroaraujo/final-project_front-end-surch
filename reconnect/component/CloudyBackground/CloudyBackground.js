import React from "react";
import Image from "next/image";
import cloudyBackground from "../../public/images/cloudyBackground.png";
import styles from "../../styles/Home.module.css";

function CloudyBackground() {
  return (
    <Image
      className={styles.cloudybackground}
      src={cloudyBackground}
      alt="Cloudy Background"
    ></Image>
  );
}

export default CloudyBackground;
