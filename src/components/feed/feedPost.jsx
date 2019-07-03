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
  let dtFormatted = post.date.toString();

  const toggleModal = () => setOpen(!open);

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
        <Button size="small" color="primary" onClick={toggleModal}>
          See more
        </Button>
      </CardActions>

      <PostModal
        open={open}
        onClose={toggleModal}
        post={post}
        dtFormatted={dtFormatted}
      />
    </Card>
  );
};

export default FeedPost;
