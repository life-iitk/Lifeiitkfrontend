import React from "react";
import {
  Grid,
  Avatar,
  Button,
  Paper,
  InputAdornment,
  IconButton,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InfoIcon from "@material-ui/icons/Info";
import DomainIcon from "@material-ui/icons/Domain";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Por from "./por/por";
import Tags from "./tags/tags.js";
import axios from "axios";
import { API_ROOT } from "../../api-config";

const userDetailList = [
  { name: "name", icon: <AccountCircleIcon /> },
  { name: "roll", icon: <InfoIcon /> },
  { name: "dept", icon: <DomainIcon /> },
  { name: "room", icon: <MeetingRoomIcon /> },
  { name: "hometown", icon: <LocationCityIcon /> },
  { name: "blood_group", icon: <InvertColorsIcon /> },
  { name: "username", icon: <AlternateEmailIcon /> }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    alignItems: "center"
  },
  wrapper: {
    display: "inline-block",
    margin: 20,
    textAlign: "center"
  },
  imageWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    margin: 20,
    maxWidth: 220,
    borderRadius: 10
  },
  vertCards: {
    margin: "10px 0"
  },
  fab: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    boxShadow: "none"
  }
}));

const UserInfo = props => {
  const classes = useStyles();
  const [link, setLink] = React.useState(props.details.fblink);

  const updateLink = () => {
    axios({
      method: "put",
      url: `${API_ROOT}/users/`,
      data: { fblink: link },
      withCredentials: true
    });
  };

  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <Grid container spacing={0}>
          <Grid
            item
            sm={6}
            style={{ width: "100%" }}
            className={classes.imageWrap}
          >
            <img
              src={props.details.image}
              alt="Hi there"
              className={classes.avatar}
            />
          </Grid>
          <Grid item sm={6} style={{ width: "100%" }}>
            <Paper style={{ width: "100%" }}>
              <List>
                {userDetailList.map(detail => (
                  <ListItem key={detail.name}>
                    <ListItemAvatar>
                      <Avatar>{detail.icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        props.details[detail.name] +
                        (detail.name === "username" ? "@iitk.ac.in" : "")
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
        <div className={classes.vertCards}>
          <Por por={props.details.por} />
        </div>
        <div className={classes.vertCards}>
          <Tags tags={props.details.tags} />
        </div>
        <div className={classes.vertCards}>
          <Paper style={{ textAlign: "left", padding: 20 }}>
            <TextField
              style={{ marginLeft: 20 }}
              variant="filled"
              label="Facebook Link"
              defaultValue={props.details.fblink}
              onChange={e => setLink(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="end">
                      <i className="fa fa-facebook-official" />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.fab}
              onClick={updateLink}
            >
              Update
            </Button>
          </Paper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserInfo;
