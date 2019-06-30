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
import PostModal from "./postModal";

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

const FeedPost = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const post = props.post;
  let dtFormatted = post.event.date.toString();
  dtFormatted = dtFormatted.slice(0, dtFormatted.indexOf("00:00:00") - 5);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card style={{ margin: "10px 10px" }}>
      <CardHeader
        avatar={<Avatar src="avatar.png" />}
        title={post.event.title}
        subheader={post.event.by}
      />

      <CardContent style={{ padding: "0 16px" }}>
        <Typography variant="overline">
          <i className="fa fa-calendar-o" />
          &nbsp;{post.event.start_time.slice(0, 5)}-
          {post.event.end_time.slice(0, 5)} | {dtFormatted} | {post.event.venue}
          <br />
        </Typography>
        <Typography component="p" variant="body2">
          {post.event.summary}
        </Typography>
        {post.tags.map((tag, index) => {
          return (
            <Chip
              color="primary"
              size="small"
              key={index}
              label={tag.name}
              className={classes.chip}
            />
          );
        })}
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          See more
        </Button>
      </CardActions>

      <PostModal
        open={open}
        onClose={handleClose}
        post={post}
        dtFormatted={dtFormatted}
      />
    </Card>
  );
};

export default FeedPost;
