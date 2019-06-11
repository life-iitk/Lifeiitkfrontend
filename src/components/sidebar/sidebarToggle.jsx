import React from "react";

const SidebarToggle = props => {
  return (
    <div className="sidebar-toggle" onClick={props.onSidebarToggle}>
      <i className="fa fa-bars" />
    </div>
  );
};

export default SidebarToggle;
