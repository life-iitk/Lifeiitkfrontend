import React, { useEffect } from "react";
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
import PostModal from "./adminPostModal";
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
  console.log(props)
  const classes = useStyles();
  const [postOpen, setPostOpen] = React.useState(false);
  const [delOpen, setDelOpen] = React.useState(false);
  const [tagName, setTagName] = React.useState("");
  const post = props.post;
  let dtFormatted = post.date.toString();
  dtFormatted = dtFormatted.slice(0, dtFormatted.indexOf(":") - 7);

  const togglePost = () => setPostOpen(!postOpen);
  const toggleDelBox = () => setDelOpen(!delOpen);
  useEffect(() => getTagName(setTagName), []); 
  const getTagName = (set) => {
    if(!!!post.tag_name) {
      console.log(post.tags);
      post["TAGNAME"]=post.tags[0].name;
    set(post.tags[0].name);
    }
    else {
      post["TAGNAME"]=post.tag_name;
      set(post.tag_name);
    }
  };

  return (
    <Card style={{ margin: "10px 10px" }}>
      <CardHeader
        avatar={<Avatar src="avatar.png" />}
        title={post.title}
        subheader={tagName}
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
