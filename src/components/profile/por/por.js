import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles({
  card: {
    width: 370,
    marginLeft: 20,
    marginBottom: 1,
  },
  typo: {
    marginBottom: 5,
  }
});

export default function Por() {
  const classes = useStyles();

  function BadgeIcon(props) {
    return (
      <SvgIcon {...props}>
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
      </SvgIcon>
    )
  }  

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.typo}>
          Positions Of Responsibility
        </Typography>
        <Grid container 
            direction="row"
            alignItems="center"
            spacing = {1}
            fullWidth
        >
            <Grid item justify="center">
            <BadgeIcon />
            </Grid>
            <Grid item justify="center">
                Secretary, Programming Club
            </Grid>
        </Grid>  
        <Grid container 
            direction="row"
            alignItems="center"
            spacing = {1}
            fullWidth
        >
            <Grid item justify="center">
            <BadgeIcon />
            </Grid>
            <Grid item justify="center">
                Secretary, Aeromodelling Club
            </Grid>
        </Grid>  
      </CardContent>
    </Card>
  );
}