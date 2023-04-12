import React, {useState, useContext} from 'react'
import { EmojiContext } from './ContextApp';

export default function HookClock() {
const { happy, sad, mood, setMood } = React.useContext(EmojiContext);

const [time, setTime] = useState()

const currentTime = () => {
  const now = new Date()
  setTime(now.toLocaleTimeString())
}

setInterval(currentTime, 1000)

  return (
    <div>
    <h1>the time is: {time} </h1>
  
    <div> { mood ? happy : sad }</div>
    <button onClick={() => setMood(!mood)}>Change</button>
    </div>
    
  )
}

