import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Feed from "./feed/feed";
import Mess from "./mess/mess";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    background: "#ececec",
    padding: theme.spacing(1),
    minHeight: "100vh"
  },
  toolbar: theme.mixins.toolbar
}));

const Main = props => {
  const classes = useStyles();
  const renderPage = pgName => {
    switch (pgName) {
      case "Feed":
        return <Feed />;
      case "Mess":
        return <Mess />;
      default:
        return <Feed />;
    }
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {renderPage(props.page.name)}
    </main>
  );
};

export default Main;
