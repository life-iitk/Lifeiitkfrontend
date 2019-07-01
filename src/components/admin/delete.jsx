import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography
} from "@material-ui/core";

const DeleteDialog = props => {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle id="alert-dialog-title">{"Delete this event?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="h6">{props.eventName}</Typography>
          Are you sure you want to delete this event? This cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => props.delete(props.eventId)} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
