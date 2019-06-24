import React from "react";
import SideBarItem from "./sidebarComponent";
import { Button } from "@material-ui/core";

const SideBar = props => {
  return (
    <React.Fragment>
      <div className={"sidebar-container" + (!props.active ? " hidden" : "")}>
        <div className="sidebar">
          <Button
            onClick={props.openLogin}
            variant="contained"
            color="primary"
            style={{ width: 105, margin: 10 }}
          >
            Login
          </Button>
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
