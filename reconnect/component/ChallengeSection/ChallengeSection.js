import styles from "./ChallengeCard.module.css";
import ChallengeCard from "./ChallengeCard";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import AchievementContext from "../AchievementContext/AchievementContext";

export default function ChallengeSection() {
  const [achievementList, setAchievementList] = useContext(AchievementContext);
  const router = useRouter();

  return (
    <div>
      <h1 className={styles.title}>Challenges of the week</h1>
      <div className={styles.challenges}>
        {achievementList.map((e) => (
          <ChallengeCard
            key={e.id}
            id={e.id}
            challenge={e.achievement}
            isCompleted={e.completion}
          />
        ))}
      </div>
    </div>
  );
}
