import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import TopBar from "./register_top";
import TopBar from "../topbar/topbar";
// import SideBar from "./register_side";
import SideBar from "../sidebar/sidebar";
import Roll from "./roll";
import SetPassword from "./setPassword";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    background: "#ececec",
    padding: theme.spacing(0, 1),
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  toolbar: theme.mixins.toolbar,

  paper: {
    flex: 1,
    position: "absolute",
    margin: "auto",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    outline: "none",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formgroup: {
    width: "90%",
    margin: 5,
  },
  box: {
    padding: theme.spacing(2),
    border: "0.1rem gray solid",
    borderRadius: "2rem",
  },
}));

const Register = (props) => {
  const [title, setTitle] = useState("LIFE@IITK");
  useEffect(() => {
    if (props.target === "password") {
      setTitle("Set Password");
    } else if (props.target === "roll") {
      setTitle("Register");
    }
  });
  const classes = useStyles();
  return (
    <React.Fragment>
      <TopBar
        toggleSidebar={props.toggleSidebar}
        // currentPage={{}}
        openLogin={{}}
        data={{}}
        register
        // title={title}
        currentPage={{ name: title }}
      />
      <SideBar
        // pages={this.state.pages}
        // activePage={this.state.activePage}
        drawer={props.drawer}
        pageHandler={props.pageHandler}
        handleToggle={props.handleToggle}
        open={props.open}
        openLogin={props.openLogin}
        register
        // data={this.state.details}
      />
      <main className={classes.content}>
        <div className={classes.container}>
          {/* <Roll classes={classes} /> */}
          {props.target === "password" && (
            <SetPassword classes={classes} type={props.type} />
          )}
          {props.target === "roll" && <Roll classes={classes} />}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Register;
