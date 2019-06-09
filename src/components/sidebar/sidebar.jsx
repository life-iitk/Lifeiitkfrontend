import React from "react";
import SideBarItem from "./sidebarComponent";

const SideBar = props => {
  // Receives page list and index of active page from App
  // Each page of App must contain 'name' and 'icon' properties
  return (
    <div className="sidebar">
      {props.pages.map((page, index) => {
        return (
          <SideBarItem
            key={index}
            page={page}
            active={props.activePage === index}
            changePage={props.pageHandler}
          />
        );
      })}
    </div>
  );
};

export default SideBar;
