import React from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Courses;
