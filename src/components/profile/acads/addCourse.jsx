import React from "react";
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
import courseData from "./courses.json";

const useStyles = makeStyles(theme => ({
  input: {
    margin: theme.spacing(1)
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

const AddCourse = props => {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const [dept, setDept] = React.useState("MTH");
  const [code, setCode] = React.useState(courseData[dept][0]);

  return (
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
            inputProps={{ name: "code" }}
            onChange={e => setCode(e.target.value)}
          >
            {courseData[dept].map((code, index) => (
              <MenuItem key={index} value={code}>
                {code}
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
