import React from "react";
import { Paper, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AcadSection from "./acads/acads";
import UserInfo from "./userInfo";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden"
  },
  paper: {
    maxWidth: 210,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  bigAvatar: {
    margin: 20,
    width: 100,
    height: 100
  },
  updateButton: {
    margin: 20,
    width: 100,
    height: 40
  },
  input: {
    display: "none"
  }
}));

export default function Profile() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const changePage = (e, newPg) => setPage(newPg);

  const [courses, setCourses] = React.useState([
    { code: "MTH101", name: "Mathematics - I" },
    { code: "PHY101", name: "Physics Laboratory" },
    { code: "ESC101", name: "Fundamentals of Computer Science" }
  ]);

  const addCourse = courseCode => {
    if (courses.find(course => course.code === courseCode)) {
      console.log("Course already exists");
      return true;
    } else {
      // Send API call here
      const newCourses = [...courses];
      newCourses.push({ code: courseCode, name: "Something something" });
      setCourses(newCourses);
      return false;
    }
  };

  return (
    <div className={classes.root}>
      <Paper square>
        <Tabs
          value={page}
          indicatorColor="primary"
          textColor="primary"
          onChange={changePage}
        >
          <Tab label="Profile" />
          <Tab label="Academics" />
        </Tabs>
      </Paper>
      {page === 0 ? (
        <UserInfo />
      ) : (
        <AcadSection courses={courses} addCourse={addCourse} />
      )}
    </div>
  );
}
