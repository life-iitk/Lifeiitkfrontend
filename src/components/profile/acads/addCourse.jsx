import React, { useEffect } from "react";
import {
  Select,
  MenuItem,
  Card,
  CardContent,
  FormControl,
  Fab,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { API_ROOT } from "../../../api-config"

const useStyles = makeStyles(theme => ({
  input: {
    margin: theme.spacing(1)
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

const getCourses = (set) => {
  // const response = { data: require("./courses.json") };
  axios.get(`${API_ROOT}/acads/all/`).then(response => {
    const courseData1 = response.data.map(e => {
    const regex = /[\d]+/g;
    const i = e.code.search(regex);
    e["dept"] = e.code.substring(0, i);
    e["code"] = e.code.substring(i);
    return e;
  });
  const courseData2 = {};
  courseData1.forEach(item => {
    if (!courseData2.hasOwnProperty(item.dept)) {
      courseData2[item.dept] = [item];
    } else {
      courseData2[item.dept].push(item);
    }
  });
  set(courseData2);});

};

const AddCourse = props => {
  const classes = useStyles();
  const [courseData, setCourseData] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [dept, setDept] = React.useState("MTH");
  const [code, setCode] = React.useState("101");
  
  useEffect(() => getCourses(setCourseData), []); 
  // console.log(!!Object.keys(courseData));

  return Object.keys(courseData).length===0 ? (
    "Loading..."
  ) : (
    <Card style={{ margin: "10px 0" }}>
      <CardContent>
        {/* Set departments */}
        <FormControl className={classes.input}>
          <Select
            value={dept}
            inputProps={{ name: "dept" }}
            onChange={e => setDept(e.target.value)}
          >
            {Object.keys(courseData).map((dept, index) => (
              <MenuItem key={index} value={dept}>
                {dept}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Set course code */}
        <FormControl className={classes.input}>
          <Select
            value={code}
            inputProps={{ name: "course_id" }}
            onChange={e => setCode(e.target.value)}
          >
            {courseData[dept].map((code, index) => (
              <MenuItem key={index} value={code.code}>
                {code.code}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.input}>
          <Fab color="primary" size="small">
            <AddIcon
              onClick={() => {
                const exists = props.add(dept + code);
                setShow(exists);
              }}
            />
          </Fab>
        </FormControl>
        {show ? (
          <Typography variant="body2" color="secondary">
            Course already added
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default AddCourse;
