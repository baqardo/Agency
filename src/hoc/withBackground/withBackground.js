import React, { Component } from "react";

import "./withBackground.scss";

const withBackground = (WrappedComponent, { newClass = "o-background-container", id }) => {
  return class extends Component {
    render() {
      return (
        <div className={newClass} id={id}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withBackground;
