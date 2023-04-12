import React, { Component } from 'react'
import Emoji from './Emoji'
import Calculator from './Calculator'

export class CalcEmoji extends Component {
  render() {
    return (
      <div>
        <Calculator/>
        <Emoji/>
      </div>
    )
  }
}

export default CalcEmoji