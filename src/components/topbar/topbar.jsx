import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import axios from "axios";
import {API_ROOT} from "../../api-config";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  title: {
    flexGrow: 1
  }
}));

const TopBar = props => {
  console.log(props.data);
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = React.useState(false);

  const logout = () => {
    axios
      .get(`${API_ROOT}/users/auth/logout/`, { withCredentials: true })
      .then(() => window.location.reload());
  }

  useEffect(() => {
    console.log(props.data)
    console.log(Object.keys(props.data).length)
    if (Object.keys(props.data).length !== 0)
      setLoggedIn(true)
      console.log(loggedIn);
  },[props.data])

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          onClick={props.toggleSidebar}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} noWrap>
          {props.currentPage.name}
        </Typography>
        { loggedIn ? (
        <Button color="inherit" onClick={logout}>
        Logout
      </Button>
        ) : ( 
        <Button color="inherit" onClick={props.openLogin}>
        Login
      </Button>
        )}

      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
