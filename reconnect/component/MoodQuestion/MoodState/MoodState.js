import Image from "next/image"


function MoodState(props) {
  return (
    <div>
    <Image src={props.src} alt={props.alt} width={26.43} height={26.43}></Image>
    <p>{props.mood}</p>
    </div>
  )
}

export default MoodState