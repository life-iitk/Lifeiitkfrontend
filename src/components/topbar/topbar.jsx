import React from "react";
import SidebarToggle from "../sidebar/sidebarToggle";

const TopBar = props => {
  return (
    <nav className="topbar-container">
      <SidebarToggle onSidebarToggle={props.onSidebarToggle} />
      <div className="page-title">{props.currentPage.name}</div>
    </nav>
  );
};

export default TopBar;
