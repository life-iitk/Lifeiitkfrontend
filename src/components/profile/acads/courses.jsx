import React from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DeleteIcon from "@material-ui/icons/Delete";

const Courses = props => {
  return (
    <Card style={{ margin: "10px 0" }}>
      <CardContent>
        <List>
          {props.courses.map((course, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <ChevronRightIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={course.name} secondary={course.code} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={() => props.delete(course.code)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Courses;
