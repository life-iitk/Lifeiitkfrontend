import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Avatar,
  Typography,
  Chip
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PostModal from "../feed/postModal";
import DeleteDialog from "./delete";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

const EventCard = props => {
  const classes = useStyles();
  const [postOpen, setPostOpen] = React.useState(false);
  const [delOpen, setDelOpen] = React.useState(false);
  const post = props.post;
  let dtFormatted = post.date.toString();
  dtFormatted = dtFormatted.slice(0, dtFormatted.indexOf(":") - 7);

  const togglePost = () => setPostOpen(!postOpen);
  const toggleDelBox = () => setDelOpen(!delOpen);

  return (
    <Card style={{ margin: "10px 10px" }}>
      <CardHeader
        avatar={<Avatar src="avatar.png" />}
        title={post.title}
        subheader={post.tags[0].name}
      />

      <CardContent style={{ padding: "0 16px" }}>
        <Typography variant="overline">
          <i className="fa fa-calendar-o" />
          &nbsp;{post.start_time.slice(0, 5)}-{post.end_time.slice(0, 5)} |{" "}
          {dtFormatted} | {post.venue}
          <br />
        </Typography>
        <Typography component="p" variant="body2">
          {post.summary}
        </Typography>
        {post.hash_tags.map((tag, index) => {
          return (
            <Chip
              color="primary"
              size="small"
              key={index}
              label={tag}
              className={classes.chip}
            />
          );
        })}
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" onClick={togglePost}>
          See More
        </Button>
        <Button
          size="small"
          color="secondary"
          style={{ marginLeft: "auto" }}
          onClick={toggleDelBox}
        >
          Delete
        </Button>
      </CardActions>
      <DeleteDialog
        delete={props.delete}
        open={delOpen}
        onClose={toggleDelBox}
        eventName={post.title}
        eventId={post.event_id}
      />
      <PostModal
        open={postOpen}
        onClose={togglePost}
        post={post}
        dtFormatted={dtFormatted}
      />
    </Card>
  );
};

export default EventCard;
