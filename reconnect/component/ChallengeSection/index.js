import styles from "./ChallengeCard.module.css";
import ChallengeCard from "./ChallengeCard";

export default function ChallengeSection() {

    function handleClick(e) {
        console.log('handleClick', e)
    };

    function handleChange(e) {
        console.log('handleChange', e)
    };

    return(
        <div>
            <h1 className={styles.title}>Challenges of the week</h1>
        <div className={styles.challenges}>
          <ChallengeCard challenge={"Go to the Park"}/>
          <ChallengeCard challenge={"Walk 5k steps"}/>
          <ChallengeCard challenge={"Get 15 mins of sun"}/>
          <ChallengeCard challenge={"Go for a coffee with a friend"}/>

        </div>
        </div>
    )
}