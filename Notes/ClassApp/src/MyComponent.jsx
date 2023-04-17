import React, { Component } from 'react'

export default class MyComponent extends Component {
    nameProps = JSON.stringify(this.props)
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                {/* <h2>{nameProps}</h2> */}
            </div>
        )
    }
}
