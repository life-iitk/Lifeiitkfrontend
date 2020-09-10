import React, { useState } from "react";
import {
  Modal,
  Button,
  // Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Avatar,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import axios from "axios";
import { API_ROOT } from "../../api-config";
// import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import CustomModal from "./customModal";

const Roll = (props) => {
  // const classes = useStyles();
  const [roll, setRoll] = useState(111111);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const func1 = (event) => {
    event.preventDefault();
    setRoll(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(e);
    axios({
      method: "post",
      url: `${API_ROOT}/users/register/`,
      data: { roll },
    })
      .then((e) => {
        console.log("S");
        console.log(e);
        // setOpen(true)
        setModal({
          isOpen: true,
          title: "Success",
          message: "Please check your mailbox for a verification mail",
        });
      })
      .catch((e) => {
        // console.log('F')
        // setOpen(true)
        console.log(e);
        if (e.status === 403) {
          setModal({
            isOpen: true,
            title: "An Error Occured",
            message: "User Already Exists",
          });
        } else {
          setModal({
            isOpen: true,
            title: "An Error Occured",
            message: "Something went wrong",
          });
        }
      });
  };

  return (
    // <main className={classes.content}>
    // 	<div className={classes.container}>
    <div className={props.classes.box}>
      <h1>Enter Your Roll Number</h1>
      <form onSubmit={(e) => e.preventDefault()} className={props.classes.form}>
        <FormControl className={props.classes.formgroup}>
          <InputLabel>Roll No.</InputLabel>
          <Input onChange={func1} type="number" required={true} />
        </FormControl>
        <br />
        {!!error && <p style={{ color: "red" }}>{error}</p>}
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          style={{ margin: 10 }}
          type="submit"
        >
          Continue
        </Button>
      </form>
      {/* {getModal()} */}
      <CustomModal classes={props.classes} modal={modal} setModal={setModal} />
    </div>
    // 	</div>
    // </main>
  );
};

export default Roll;
