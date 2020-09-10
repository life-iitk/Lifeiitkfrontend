import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Modal,
  Button,
  // Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { API_ROOT } from "../../api-config";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import CustomModal from "./customModal";

// 4WQ7G4IZ1QOGUB5RNYS7MEA643FO

const SetPassword = (props) => {
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
  });
  const [showPwd, setPwdShow] = React.useState(false);
  const [showConfPwd, setConfPwdShow] = React.useState(false);
  const [showOldPwd, setOldPwdShow] = React.useState(false);
  const [pwd, setpwd] = useState("");
  const [confPwd, setconfPwd] = useState("");
  const [oldPwd, setOldPwd] = useState("");
  const [error, setError] = useState(false);
  const funcOld = (e) => {
    e.preventDefault();
    setOldPwd(e.target.value);
  };
  const func1 = (event) => {
    event.preventDefault();
    setpwd(event.target.value);
  };
  const func2 = (event) => {
    event.preventDefault();
    setconfPwd(event.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (pwd.length * confPwd.length === 0) {
      setError("Both Fields are required!");
      return;
    }
    if (pwd !== confPwd) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    // console.log(e);
    const params = new URLSearchParams(window.location.search);
    const p = params.get("code");
    const code = p ? p.split("/")[0] : p;
    let url, body;
    if (props.type === "resetpass") {
      url = API_ROOT + `/users/resetpass/code=${code}/`;
      body = {
        new_password1: pwd,
        new_password2: confPwd,
        old_password: oldPwd,
      };
    } else {
      url = API_ROOT + `/users/verify/code=${code}/`;
      body = {
        password: pwd,
      };
    }
    axios({
      method: "post",
      url,
      data: body,
      withCredentials: true,
    })
      .then((e) => {
        if (e.data.code === 200) {
          setModal({
            isOpen: true,
            title: "Success",
            message: "Password has been set successfully",
          });
        } else {
          throw new Error(e.data.code);
        }
      })
      .catch((e) => {
        console.log(e);
        let message = "Something went wrong";
        if (
          props.type === "resetpass" &&
          ((e.response && e.response.status === 401) || e.message === "401")
        ) {
          message = "Wrong Password";
        }
        setModal({
          isOpen: true,
          title: "Error",
          message,
        });
      });
  };

  const passwordInput = (label, onChange, vis, setVis) => {
    return (
      <FormControl className={props.classes.formgroup}>
        <InputLabel>{label}</InputLabel>
        <Input
          onChange={onChange}
          type={vis ? "text" : "password"}
          required={true}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={() => setVis(!vis)}
              >
                {vis ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    );
  };

  return (
    <div className={props.classes.box}>
      <h1>Set Your Password</h1>
      <form onSubmit={(e) => e.preventDefault()} className={props.classes.form}>
        {props.type === "resetpass" &&
          passwordInput("Current Password", funcOld, showOldPwd, setOldPwdShow)}
        {passwordInput("Password", func1, showPwd, setPwdShow)}
        {passwordInput("Confirm Password", func2, showConfPwd, setConfPwdShow)}
        <br />
        {!!error && <p style={{ color: "red" }}>{error}</p>}
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          style={{ margin: 10 }}
          type="submit"
        >
          Done
        </Button>
      </form>
      <CustomModal classes={props.classes} modal={modal} setModal={setModal} />
    </div>
  );
};

export default SetPassword;
