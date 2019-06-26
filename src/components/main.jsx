import React, { Component } from "react";
import Mess from "./mess/mess";

class Main extends Component {
  renderPage = props => {
    if (props.page.name === "Mess") {
      return <Mess />;
    }
  };
  render() {
    return (
      <div
        className={
          "main-wrapper mt-2" +
          (this.props.sidebarActive ? "" : " sidebar-hidden")
        }
      >
        {/* Depending on page passed in props, render corresponding component */}
        {this.renderPage(this.props)}
      </div>
    );
  }
}

export default Main;
