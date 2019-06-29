import React from "react";
import {
  Typography,
  Avatar,
  Hidden,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CardHeader
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  drawerPaper: {
    width: drawerWidth
  },
  profile: {
    transition: "all 0.15s ease-in-out",
    "&:hover": {
      background: "#ececec"
    }
  }
}));

const SideBar = props => {
  const classes = useStyles();

  const drawer = isMobile => (
    <div>
      <div className={classes.toolbar}>
        <Typography variant="h4" color="primary">
          Life@IITK
        </Typography>
      </div>
      <Divider />
      <div
        className={classes.profile}
        onClick={() => {
          props.pageHandler("Profile");
          if (isMobile) props.handleToggle();
        }}
      >
        <CardHeader
          avatar={<Avatar src="profile-pic.png" />}
          title="John Doe"
          subheader="180777"
        />
      </div>
      <Divider />
      <List>
        {props.pages
          .filter(page => page.name !== "Profile")
          .map((page, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                props.pageHandler(page.name);
                if (isMobile) props.handleToggle();
              }}
            >
              <ListItemIcon>
                <i className="material-icons">{page.icon}</i>
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItem>
          ))}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={props.open}
          onClose={props.handleToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer(true)}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer(false)}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SideBar;
