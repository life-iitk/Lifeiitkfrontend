import React from "react";
import MessFilter from "./messFilter";
import MessContent from "./messContent";
import menuJSON from "./menu.json";

const Mess = props => {
  const menus = menuJSON["menus"];
  const numOfHalls = menus.length;
  const [day, setDay] = React.useState(new Date().getDay() - 1);
  const [hall, setHall] = React.useState(1);
  return (
    <React.Fragment>
      <MessFilter
        setHall={setHall}
        setDay={setDay}
        numOfHalls={numOfHalls}
        day={day}
        hall={hall}
      />
      <MessContent menu={menus[hall - 1][day]} />
    </React.Fragment>
  );
};

export default Mess;
