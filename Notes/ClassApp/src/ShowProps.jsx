import React, { Component } from 'react'

export default class ShowProps extends Component {
    nameProps = JSON.stringify(this.props)
    // name = this.props.name
  render() {
    return (
      <div>
        {this.nameProps}
        {this.nameProps.name}
      </div>
    )
  }
}
