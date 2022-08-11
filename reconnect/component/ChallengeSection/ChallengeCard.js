import styles from "./ChallengeCard.module.css";
import { useState, useContext, useEffect } from "react";
import Router, { useRouter } from "next/router";
import AchievementContext from "../AchievementContext/AchievementContext";
import Link from "next/link";

export default function ChallengeCard({ challenge, id, isCompleted }) {
  const [achievementList, setAchievementList] = useContext(AchievementContext);
  const router = useRouter();

  async function handleClick() {
    let updatedItem = {
      userid: 1,
      achievement: challenge,
      completion: !isCompleted,
      id: id,
    };

    const response = await fetch(
      `https://reconnect-surch.herokuapp.com/achievement/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      }
    );
    const data = await response.json();

    setAchievementList([...achievementList, updatedItem]);
    router.push("/achievement");
  }

  return (
    <label className={isCompleted ? styles.cardAfter : styles.cardBefore}>
      <p className={styles.challengeText}>{challenge}</p>
      <input type="checkbox" onClick={handleClick} />
      <span className={styles.checkmark}></span>
    </label>
  );
}
