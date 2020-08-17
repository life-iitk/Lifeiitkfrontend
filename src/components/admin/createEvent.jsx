import React from "react";
import axios from "axios";
import moment from "moment";
import {
  Modal,
  CardContent,
  TextField,
  FormControlLabel,
  Switch,
  CardActions,
  Button,
  Chip,
  Fab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { API_ROOT } from "../../api-config";

moment().format();

const useStyles = makeStyles((theme) => ({
  paper: {
    flex: 1,
    position: "absolute",
    margin: "auto",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    outline: "none",
  },
  chip: {
    margin: theme.spacing(0.5),
    marginTop: theme.spacing(1.5),
  },
  fab: {
    margin: theme.spacing(0.5),
  },
  textField: {
    margin: theme.spacing(0.5),
  },
}));

const CreateEvent = (props) => {
  const classes = useStyles();
  const [formData, setFormData] = React.useState({
    description: "",
    summary: "",
    title: "",
    date: new Date().toISOString().slice(0, 10),
    start_time: "00:00",
    end_time: "00:00",
    day_long: false,
    hash_tags: [],
  });
  const [tag, setTag] = React.useState("");

  const addTag = () => {
    const newFormData = { ...formData };
    if (!newFormData.hash_tags.includes(tag)) {
      newFormData.hash_tags.push(tag);
      setFormData(newFormData);
    }
  };

  const createEvent = (e, data) => {
    e.preventDefault();
    props.create(formData);
    axios({
      method: "post",
      url: `${API_ROOT}/events/create/`,
      data: {
        ...formData,
        // Convert stuff to Django format
        date: moment(formData.date).format("YYYY-MM-DD"),
        start_time: formData.start_time + ":00",
        end_time: formData.end_time + ":00",
        day_long: formData.day_long ? "True" : "False",
      },
      withCredentials: true,
    });
  };

  const handleChange = (name) => (e, data) => {
    formData[name] = name === "day_long" ? data : e.target.value;
  };

  const deleteTag = (index) => {
    const newData = { ...formData };
    newData.hash_tags.splice(index, 1);
    setFormData(newData);
  };

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={classes.paper}>
        <CardContent>
          <form onSubmit={createEvent}>
            <TextField
              required
              label="Title"
              onChange={handleChange("title")}
              margin="dense"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              required
              label="Venue"
              onChange={handleChange("venue")}
              margin="dense"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              required
              label="Description"
              onChange={handleChange("description")}
              margin="dense"
              variant="outlined"
              className={classes.textField}
              rows={4}
              multiline
            />
            <TextField
              required
              label="Summary"
              onChange={handleChange("summary")}
              margin="dense"
              variant="outlined"
              className={classes.textField}
              rows={4}
              multiline
            />
            <br />
            <TextField
              required
              label="Date"
              type="date"
              margin="dense"
              variant="outlined"
              className={classes.textField}
              defaultValue={formData.date}
              onChange={handleChange("date")}
            />
            <TextField
              required
              label="Start time"
              type="time"
              margin="dense"
              variant="outlined"
              className={classes.textField}
              defaultValue={formData.start_time}
              onChange={handleChange("start_time")}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <TextField
              required
              label="End time"
              type="time"
              margin="dense"
              variant="outlined"
              className={classes.textField}
              defaultValue={formData.end_time}
              onChange={handleChange("end_time")}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <br />
            {formData.hash_tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                color="primary"
                margin="dense"
                onDelete={() => deleteTag(index)}
                className={classes.chip}
              />
            ))}
            <TextField
              label="Add hashtags"
              margin="dense"
              variant="outlined"
              className={classes.textField}
              onChange={(e) => setTag(e.target.value)}
            />
            <Fab
              color="primary"
              size="small"
              onClick={addTag}
              className={classes.fab}
            >
              <AddIcon />
            </Fab>
            <br />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="allday"
                  onChange={handleChange("day_long")}
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
