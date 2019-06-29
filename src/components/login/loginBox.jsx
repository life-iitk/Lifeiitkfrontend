import React,{useState} from "react";
import axios from 'axios'
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  paper: {
    flex: 1,
    position: "absolute",
    margin: "auto",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    outline: "none",
    textAlign: "center"
  },
  formgroup: {
    width: "80%",
    margin: 5
  }
}));

const LoginBox = props => {
  const [showPwd, setPwdShow] = React.useState(false);
  const classes = useStyles();
  const [state,setstate] = useState('default');
  const [state1,setstate1] = useState('');
  const handleClick = (e)=>{
    e.preventDefault();
    var form_data = new FormData();
    form_data.set('username',state);
    form_data.set('password',state1);
    // fetch('http://localhost:8000/users/auth/login/', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //             'username' : state,
    //             'password' : state1,
    //           }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(res => {
    //     return res;
    // }).catch(err => err);
    var qs = require('qs');
    axios({
        method: 'post',
        url: 'http://localhost:8000/users/auth/login/',
        data: qs.stringify({
          'username' : state,
          'password' : state1
        }),
        withCredentials: true
    });
  };
  const func1 = (event)=>{
  event.preventDefault();
  setstate(event.target.value);
  };
  const func2 = (event)=>{
  event.preventDefault();
  setstate1(event.target.value);
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
        <Typography variant="h4" color="primary">
          Life@IITK
        </Typography>
        <FormControl className={classes.formgroup}>
          <InputLabel>Username</InputLabel>
          <Input required={true} onChange = {func1}>Username</Input>
        </FormControl>
        <FormControl className={classes.formgroup}>
          <InputLabel>Password</InputLabel>
          <Input onChange = {func2}
            type={showPwd ? "text" : "password"}
            required={true}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={() => setPwdShow(!showPwd)}
                >
                  {showPwd ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        <Button onClick={handleClick} variant="contained" color="primary" style={{ margin: 10 }}>
          Login
        </Button>
      </div>
    </Modal>
  );
};

export default LoginBox;
