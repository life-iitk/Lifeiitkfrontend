import React from "react";
import {
  Card,
  Grid,
  CardHeader,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "10px 0"
  },
  column: {
    margin: 10
  }
}));

const MessContent = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {["Breakfast", "Lunch", "Dinner"].map(meal => {
        const [mains, extras] = props.menu[meal.toLowerCase()];
        return (
          <Card className={classes.card} key={meal}>
            <CardHeader subheader={meal} />
            {/* <CardContent> */}
            <Grid container>
              <Grid item xs={5} className={classes.column}>
                <List dense={true}>
                  {mains.map((dish, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={dish} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid
                item
                xs={5}
                className={classes.column}
                style={{ background: "#ececec", borderRadius: 5 }}
              >
                <List dense={true}>
                  {extras.length === 0 ? (
                    <ListItem key={0}>
                      <ListItemText primary="No extras" />
                    </ListItem>
                  ) : (
                    extras.map((dish, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={dish} />
                      </ListItem>
                    ))
                  )}
                </List>
              </Grid>
            </Grid>
            {/* </CardContent> */}
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default MessContent;
