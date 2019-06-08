import React from "react";

const SideBarItem = props => {
  return (
    <div
      className={"sidebar-item" + (props.active ? " active" : "")}
      onClick={() => props.changePage(props.page)}
    >
      <i className={`fa fa-${props.page.icon}`} />
      <span>{props.page.name}</span>
    </div>
  );
};

export default SideBarItem;
