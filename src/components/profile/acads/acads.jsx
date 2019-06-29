import React from "react";
import AcadProfile from "./courses.jsx";
import AddCourse from "./addCourse";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "5px 0"
  }
}));

const AcadSection = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AcadProfile courses={props.courses} className={classes.card} />
      <AddCourse add={props.addCourse} className={classes.card} />
    </React.Fragment>
  );
};

export default AcadSection;
