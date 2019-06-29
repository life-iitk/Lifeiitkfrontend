import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import profileIcon from './profileIcon.png';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Typography, Button } from '@material-ui/core';
import Por from './por/por';
import Tags from './tags/tags';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  paper: {
    maxWidth: 210,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  bigAvatar: {
    margin: 20,
    width: 100,
    height: 100,
  },
  updateButton: {
    margin: 20,
    width: 100,
    height: 40,
  },
  input: {
    display: 'none',
  },
}));

export default function Profile() {
  const classes = useStyles();
  
  function AddressIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  function EmailIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </SvgIcon>
    )
  }
  function PersonIcon(props) {
    return (
      <SvgIcon {...props}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </SvgIcon>
    )
  }
  function DepartmentIcon(props) {
    return (
      <SvgIcon {...props}>
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </SvgIcon>
    )
  }
  function RollNoIcon(props) {
    return (
      <SvgIcon {...props}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </SvgIcon>
    )
  }
  function HomeTownIcon(props) {
    return (
      <SvgIcon {...props}>
      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"/>
      </SvgIcon>
    )
  }
  function BloodGroupIcon(props) {
    return (
      <SvgIcon {...props}>
      <path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/>
      </SvgIcon>
    )
  }

  function PersonalInfo() {
    return (
      <React.Fragment>
        <Grid container direction="row" spacing = {1}>
          <Grid item>
            <Grid>
              <Grid item>
                <Avatar src={profileIcon} alt="Hi there" className={classes.bigAvatar} />
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
                  <Button variant="contained" color="primary" component="span" className={classes.updateButton}>
                    Change
                  </Button>   
                </label>         
              </Grid>
            </Grid>          
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Grid container 
                direction="row"
                alignItems="center"
                spacing = {1}
                fullWidth
              >
                <Grid item>
                <PersonIcon />
                </Grid>
                <Grid item>
                  ABC XYZ
                </Grid>
              </Grid>  
              <Grid container 
                direction="row"
                alignItems="center"
                spacing = {1}
              >
                <Grid item>
                <RollNoIcon />
                </Grid>
                <Grid item>
                  180000
                </Grid>
              </Grid>  
              <Grid container 
                direction="row"
                alignItems="center"
                spacing = {1}
                wrap="nowrap"
              >
                <Grid item>
                <DepartmentIcon />
                </Grid>
                <Grid item>
                  <Typography>
                    Biological Sciences and Bio Engineering
                  </Typography>                  
                </Grid>
              </Grid>  
              <Grid container 
                direction="row"
                alignItems="center"
                spacing = {1}
              >
                <Grid item>
                <AddressIcon />
                </Grid>
                <Grid item>
                  A-000, Hall 00
                </Grid>
              </Grid>  
              <Grid container 
                direction="row"
                alignItems="center"
                spacing = {1}
              >
                <Grid item>
                <HomeTownIcon />
                </Grid>
                <Grid item>
                  Kanpur, U.P.
                </Grid>
              </Grid>  
              <Grid container 
                direction="row"
                alignItems="center"
                spacing = {1}
              >
                <Grid item>
                <BloodGroupIcon />
                </Grid>
                <Grid item>
                  A+
                </Grid>
              </Grid>  
              <Grid container 
                direction="row"
                alignItems="center"
                spacing = {1}
              >
                <Grid item>
                <EmailIcon />
                </Grid>
                <Grid item>
                  abc@iitk.ac.in
                </Grid>
              </Grid>
            </Paper>
          </Grid>          
        </Grid>
        <Grid direction="column">
          <Grid item>
            <Por />
          </Grid>
          <Grid item>
            <Tags />
          </Grid>
        </Grid>    

      </React.Fragment>
    );
  }
  
  return (
    <div className={classes.root}>      
      <Grid container
        direction="row"        
        alignItems="center">
          <PersonalInfo />
      </Grid>
    </div>
  );
}
