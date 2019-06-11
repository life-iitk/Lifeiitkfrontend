import React from "react";
import SideBarItem from "./sidebarComponent";

const SideBar = props => {
  return (
    <React.Fragment>
      <div className={"sidebar-container" + (!props.active ? " hidden" : "")}>
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
      </div>
    </React.Fragment>
  );
};

export default SideBar;
