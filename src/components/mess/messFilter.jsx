import React from "react";
import {
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CardContent
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const MessFilter = props => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        {/* Hall dropdown */}
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="hall">Hall</InputLabel>
          <Select
            value={props.hall}
            inputProps={{ name: "hall" }}
            onChange={e => props.setHall(e.target.value)}
          >
            {new Array(props.numOfHalls).fill(1).map((hall, index) => (
              <MenuItem key={index} value={index + 1}>
                Hall {index + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Day dropdown */}
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="day">Day</InputLabel>
          <Select
            value={props.day}
            inputProps={{ name: "day" }}
            onChange={e => props.setDay(e.target.value)}
          >
            {days.map((day, index) => (
              <MenuItem key={index} value={index}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default MessFilter;
