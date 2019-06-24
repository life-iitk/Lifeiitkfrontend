import React from "react";
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
          <Input required={true}>Username</Input>
        </FormControl>
        <FormControl className={classes.formgroup}>
          <InputLabel>Password</InputLabel>
          <Input
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
        <Button variant="contained" color="primary" style={{ margin: 10 }}>
          Login
        </Button>
      </div>
    </Modal>
  );
};

export default LoginBox;
