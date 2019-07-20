import React from "react";
import {
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import StarsIcon from "@material-ui/icons/Stars";
import Typography from "@material-ui/core/Typography";

export default function Por(props) {
  return (
    <Paper>
      <Typography
        variant="h6"
        color="textSecondary"
        style={{ padding: "10px 0 0 20px", textAlign: "left" }}
      >
        Positions of Responsibility
      </Typography>
      <List>
        {Object.keys(props.por).map(club => (
          <ListItem key={club}>
            <ListItemAvatar>
              <Avatar>
                <StarsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${props.por[club]}, ${club}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
