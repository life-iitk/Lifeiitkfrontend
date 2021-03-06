import React from "react";
import Courses from "./courses.jsx";
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
      <Courses
        courses={props.courses}
        className={classes.card}
        delete={props.deleteCourse}
      />
      <AddCourse add={props.addCourse} className={classes.card} />
    </React.Fragment>
  );
};

export default AcadSection;
