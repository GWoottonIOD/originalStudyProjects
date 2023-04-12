import React, { Component } from 'react'

export class Exercise1 extends Component {
    constructor(props) {
        super(props);
        this.state = {name: 'world'};// the state that needs to change
        this.ChangeToName = this.ChangeToName.bind(this); //binds this to ChangeToName
    }

    ChangeToName() {
        this.setState({name: 'Gareth'})//the outcome of the name change
    }
  render() {
    return <div>
    <h1>Hello {this.state.name}</h1> {/*The statement along with the statement */}
   <button onClick={this.ChangeToName}>ChangeMe</button>{/*The button that actions the name change */}
</div>    
  }
}

export default Exercise1
