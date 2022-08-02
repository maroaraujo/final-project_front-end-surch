import styles from "./ExploreCard.module.css"

export default function ExploreCard({title}){
    return(
        <div >
        <div
        className={bgWrap}>
        <Image
        alt="Mountains"
        src="/mountains.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

        </div>
            <p className={styles.exploreText}>{title}</p>
        </div>
    )
}