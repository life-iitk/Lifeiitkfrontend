import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import { Fab, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import AddIcon from "@material-ui/icons/Add";
import { API_ROOT } from "../../../api-config";

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: "left",
    padding: "10px 20px"
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  fab: {
    margin: theme.spacing(1),
    boxShadow: "none"
  }
}));

export default function Tags(props) {
  const classes = useStyles();
  const [tagNames, setTagName] = React.useState([]);
  const [subTagNames, setSubTagName] = React.useState([]);
  const [toSubTagNames, setToSubTagName] = React.useState("");
  const addTag = () => {
    axios({
      method: "put",
      url: `${API_ROOT}/users/tags/`,
      data: { name: toSubTagNames },
      withCredentials: true
    }).then(() => getSubTagName(setSubTagName));
  };
  const deleteTag = index => {
    axios({
      method: "delete",
      url: `${API_ROOT}/users/tags/delete/`,
      data: { tag_id: index },
      withCredentials: true
    }).then(() => getSubTagName(setSubTagName));
  };

  const getTagName = set => {
    axios.get(`${API_ROOT}/tags/all/`).then(response => {
      set(response.data);
    });
  };

  const getSubTagName = set => {
    axios
      .get(`${API_ROOT}/users/profile/`, { withCredentials: true })
      .then(response => {
        console.log(response.data.tags);
        set(response.data.tags);
      });
  };

  useEffect(() => {
    getTagName(setTagName);
    getSubTagName(setSubTagName);
  }, []);

  function changeToSub(event) {
    setToSubTagName(event.target.value);
  }

  const arrangeTags = () => {
    let tagsCopy = [...tagNames];
    tagsCopy = tagsCopy.sort((a, b) => a.name.localeCompare(b.name));
    return tagsCopy;
  };

  return tagNames.length === 0 ? (
    "Loading..."
  ) : (
    <Paper className={classes.paper}>
      <Typography variant="h6" color="textSecondary">
        Subscribed Tags
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="subTag">Tags</InputLabel>
        <Select
          style={{ marginRight: 0.5 + "em" }}
          value={toSubTagNames}
          id="subTag"
          onChange={changeToSub}
        >
          {arrangeTags().map(tag => (
            <MenuItem key={tag.tag_id} value={tag.name}>
              {tag.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Fab
        color="primary"
        size="small"
        onClick={addTag}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
      <br />
      {subTagNames.map(tag => (
        <Chip
          key={tag.tag_id}
          label={tag.name}
          color="primary"
          margin="dense"
          onDelete={() => deleteTag(tag.tag_id)}
          className={classes.chip}
        />
      ))}
    </Paper>
  );
}
