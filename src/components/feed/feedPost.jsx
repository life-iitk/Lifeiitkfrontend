import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Avatar,
  Typography
} from "@material-ui/core";
import PostModal from "./postModal";

const FeedPost = props => {
  const [open, setOpen] = React.useState(false);
  const post = props.post;
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
        title={post.title}
        subheader={post.tag.name}
      />

      <CardContent style={{ padding: "0 16px" }}>
        <Typography variant="overline">
          <i className="fa fa-calendar-o" />
          &nbsp;{post.event.start_time.slice(0,5)}-{post.event.end_time.slice(0,5)} | {post.event.date} | {post.event.venue}
          <br />
        </Typography>
        <Typography component="p" variant="body2">
          {post.event.summary}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          See more
        </Button>
      </CardActions>

      <PostModal open={open} onClose={handleClose} post={post} />
    </Card>
  );
};

export default FeedPost;
