import React from "react";
import {
  Modal,
  CardHeader,
  CardContent,
  TextField,
  FormControlLabel,
  Switch,
  CardActions,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    flex: 1,
    position: "absolute",
    margin: "auto",
    width: 700,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    outline: "none"
  },
  textField: {
    width: "100%"
  }
}));

const CreateEvent = props => {
  const classes = useStyles();
  const [formData, setFormData] = React.useState({
    description: "",
    summary: "",
    title: "",
    date: new Date().toISOString().slice(0, 10),
    startTime: "07:30",
    endTime: "09:30",
    allDay: false
  });

  const createEvent = (e, data) => {
    e.preventDefault();
    props.create(formData);
  };

  const handleChange = name => (e, data) => {
    formData[name] = name === "allDay" ? data : e.target.value;
  };

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className={classes.paper}>
        {/* <CardHeader title="Create New Event" subheader={props.priv.tag.name} /> */}
        <CardContent style={{ paddingTop: 0 }}>
          <form onSubmit={createEvent}>
            <TextField
              required
              label="Title"
              name="title"
              onChange={handleChange("title")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              label="Description"
              name="description"
              onChange={handleChange("description")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              label="Summary"
              name="summary"
              onChange={handleChange("summary")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              label="Venue"
              onChange={handleChange("venue")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              label="Date"
              type="date"
              name="date"
              defaultValue={formData.date}
              onChange={handleChange("date")}
              className={classes.textField}
            />
            <TextField
              label="Start time"
              type="time"
              name="start"
              defaultValue={formData.startTime}
              onChange={handleChange("start")}
              className={classes.textField}
              inputProps={{
                step: 300 // 5 min
              }}
            />
            <TextField
              label="End time"
              type="time"
              name="end"
              defaultValue={formData.endTime}
              onChange={handleChange("end")}
              className={classes.textField}
              inputProps={{
                step: 300 // 5 min
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="allday"
                  onChange={handleChange("allDay")}
                />
              }
              label="All day event"
            />
            <br />
            <Button
              variant="contained"
              size="medium"
              color="primary"
              type="submit"
              style={{ marginLeft: "auto" }}
              // onClick={createEvent}
            >
              Create Event
            </Button>
          </form>
        </CardContent>
        <CardActions />
      </div>
    </Modal>
  );
};

export default CreateEvent;
