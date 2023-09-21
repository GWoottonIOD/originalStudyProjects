import React, {useContext} from 'react'
import {EmojiContext} from './ContextApp'
import useEmoji from './useEmoji'

export default function HookEmojis() {
    
    const { happy, sad, mood, setMood } = useContext(EmojiContext);

// export default function HookEmojis() {
    // const [mood,dispatch] = useEmoji()
    return (
         <div>
            <div>Mood= {mood}</div>
            <button onClick={()=> dispatch('happy')}>Happy</button>
            <button onClick={()=> dispatch('sad')} >Sad</button>
            <button onClick={()=> dispatch('neutral')}>Neutral</button>
        </div>
        // <div>
    //     {/* <div> { mood ? happy : sad }</div>
    // <button onClick={() => setMood(!mood)}>Change</button>
    // </div> */}
    )
}

