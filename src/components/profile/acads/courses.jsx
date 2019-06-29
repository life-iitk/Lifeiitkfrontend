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

const AcadProfile = props => {
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
              <ListItemText primary={course.code} secondary={course.name} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AcadProfile;
