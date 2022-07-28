import React from 'react'
import MoodState from './MoodState/MoodState'
import awful from '../../public/images/awful.png'
import Image from "next/image"

function MoodQuestion() {
  return (
    <div>
    <MoodState src={awful} alt="awful" mood="Awful"/>
   
    </div>
  )
}

export default MoodQuestion