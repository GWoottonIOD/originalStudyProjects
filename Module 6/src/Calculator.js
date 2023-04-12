import React, { Component } from 'react'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.handleChangeFirst = this.handleChangeFirst.bind(this)
    this.handleChangeSecond = this.handleChangeSecond.bind(this)
    this.state = {
       first:0,
       second:0,
       result:0
    }
  }

changeHandler =(e) => {
    console.log(e.target.value) 
    this.setState({[e.target.name]:e.target.value})//name must be the same as states [] because its a variable that can be changed
}

handleChangeFirst(e) {
    e.preventDefault();
    console.log(e.target.name) 
    this.setState({ first: e.target.value }); // try one function after buttons
}

handleChangeSecond(e) {
    e.preventDefault();
    console.log(e.target.name) 
    this.setState({ second: e.target.value });
}


addition = (e) => {
    this.setState({result: parseInt(this.state.first) + parseInt(this.state.second)})
}
  
subtraction = (e) => {
    this.setState({result: parseInt(this.state.first) - parseInt(this.state.second)})
}

multiply = (e) => {
    this.setState({result: parseInt(this.state.first) * parseInt(this.state.second)})
}

divide = (e) => {
    this.setState({result: parseInt(this.state.first) / parseInt(this.state.second)})
}

    render() {
        const {count}=this.props
      return (
        <div className='calcDiv'>
            <div><label>First Number</label></div><div><input type="number" name="first" value={this.state.first} onChange={this.changeHandler}></input></div>
            <div><button className='calcButtn' onClick={this.addition} >Add</button>
            <button className='calcButtn' onClick={this.subtraction} >Sub</button>
            <button className='calcButtn' onClick={this.multiply} >Mul</button>
            <button className='calcButtn' onClick={this.divide} >Div</button></div>
            <div><label>Second Number</label></div><div><input type="number" name="second" value={this.state.second} onChange={this.changeHandler}></input></div>
            <h1>{this.state.result}</h1>         
       </div>
      )
    }
  }


export default Calculator