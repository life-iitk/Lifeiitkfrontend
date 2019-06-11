import React from "react";

const Main = props => {
  return (
    <div
      className={
        "main-wrapper" + (props.sidebarActive ? "" : " sidebar-hidden")
      }
    >
      {/* Depending on page passed in props, render corresponding component */}
    </div>
  );
};

export default Main;
