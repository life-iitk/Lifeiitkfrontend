import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Modal,
  CardHeader,
  Avatar,
  CardContent,
  Chip
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    flex: 1,
    position: "absolute",
    margin: "auto",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    outline: "none"
  },
  cardBody: {
    padding: "0 16px"
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

const PostModal = props => {
  const classes = useStyles();
  const post = props.post;
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
      onClose={props.onClose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className={classes.paper}>
        <CardHeader
          avatar={<Avatar src="avatar.png" />}
          title={post.title}
          subheader={props.name}
        />
        <CardContent style={{ paddingTop: 0 }}>
          <Typography variant="overline">
            <i className="fa fa-calendar-o" />
            &nbsp;{post.start_time.slice(0, 5)}-{post.end_time.slice(0, 5)} |{" "}
            {props.dtFormatted} | {post.venue}
            <br />
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
          <Typography
            variant="body2"
            id="simple-modal-description"
            style={{ marginTop: "10px" }}
          >
            {post.description}
          </Typography>
        </CardContent>
      </div>
    </Modal>
  );
};

export default PostModal;
