import React, { Component } from "react"

import "./withPadding.scss"

const withPadding = (WrappedComponent, newClass = "o-padding-container") => {
  return class extends Component {
    render() {
      return (
        <div className={newClass}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default withPadding
