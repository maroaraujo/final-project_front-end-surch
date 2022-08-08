import Image from "next/image";
import styles from "../../../styles/Home.module.css";

function MoodState(props) {


  return (
    <div className={props.isSelected?styles.moodStateContainerSelected: styles.moodStateContainer}>
      <Image
        src={props.src}
        alt={props.alt}
        width={26.43}
        height={26.43}
        handleClick={props.handleClick}
      ></Image>
      <p>{props.mood}</p>
    </div>
  );
}

export default MoodState;
