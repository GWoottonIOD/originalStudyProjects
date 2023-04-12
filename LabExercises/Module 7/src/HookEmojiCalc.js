import React, { Component } from 'react'
//import Emoji from './Emoji'
import HookCalculator from './HookCalculator'
import HookEmojis from './HookEmojis'
import HookClock from './HookClock'


export class HookEmojiCalc extends Component {
  render() {
    return (
      <div>
        <HookCalculator/>
        <HookEmojis/>
        <HookClock/>
      </div>
    )
  }
}

export default HookEmojiCalc