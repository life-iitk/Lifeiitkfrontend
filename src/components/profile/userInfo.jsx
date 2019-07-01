import React from "react";
import { Grid, Button, Avatar, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Por from "./por/por";
import Tags from "./tags/tags.js";
import profileIcon from "./profileIcon.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden"
  },
  paper: {
    maxWidth: 210,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  bigAvatar: {
    margin: 20,
    width: 100,
    height: 100
  },
  updateButton: {
    margin: 20,
    width: 100,
    height: 40
  },
  input: {
    display: "none"
  }
}));

const UserInfo = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction="row" spacing={1}>
        <Grid item>
          <Grid>
            <Grid item>
              <Avatar
                src={profileIcon}
                alt="Hi there"
                className={classes.bigAvatar}
              />
            </Grid>
            <Grid item>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  className={classes.updateButton}
                >
                  Change
                </Button>
              </label>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="row"
              alignItems="center"
              spacing={1}
              fullWidth
            >
              <Grid item>{/* <PersonIcon /> */}</Grid>
              <Grid item>{props.details.name}</Grid>
            </Grid>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>{/* <RollNoIcon /> */}</Grid>
              <Grid item>{props.details.roll}</Grid>
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              spacing={1}
              wrap="nowrap"
            >
              <Grid item>{/* <DepartmentIcon /> */}</Grid>
              <Grid item>
                <Typography>{props.details.dept}</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>{/* <AddressIcon /> */}</Grid>
              <Grid item>{props.details.room}, {props.details.hall}</Grid>
            </Grid>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>{/* <HomeTownIcon /> */}</Grid>
              <Grid item>{props.details.hometown}</Grid>
            </Grid>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>{/* <BloodGroupIcon /> */}</Grid>
              <Grid item>{props.details.blood_group}</Grid>
            </Grid>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>{/* <EmailIcon /> */}</Grid>
              <Grid item>{props.details.username}@iitk.ac.in</Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid direction="column">
        <Grid item>
          <Por pors = {props.details.por} />  
        </Grid>
        <Grid item>
          <Tags tags = {props.details.tags}/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default UserInfo;
