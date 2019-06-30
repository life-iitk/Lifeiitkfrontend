import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  Checkbox,
  CardContent
} from "@material-ui/core";
// import Calendar from "./calendar";

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
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const FilterModal = props => {
  const classes = useStyles();
  const tagNames = props.tags.map(tag => tag.name);
  //   const [selectAll, toggleSelectAll] = React.useState(true);
  //   const [showOnlySubscribed, toggleSubscribed] = React.useState(false);

  //   const handleChange = index => (e, data) => {
  //      toggleSelectAll(false);
  //      let tempTags = [...tags];
  //      tempTags[index].isSelected = data;
  //      changeTags(tempTags);
  //      props.filter(tempTags);
  //   };

  //   const handleSelectAll = (e, checked) => {
  //      toggleSelectAll(checked);
  //      console.log(checked);
  //      let newTags = [...tags];
  //      if (showOnlySubscribed) {
  //        newTags = tags.map(tag => {
  //          if (tag.isSubscribed) return { ...tag, isSelected: checked };
  //          else return { ...tag, isSelected: false };
  //        });
  //      } else {
  //        newTags = tags.map(tag => {
  //          return { ...tag, isSelected: true };
  //        });
  //      }
  //      changeTags(newTags);
  //      console.log(newTags);
  //      props.filter(newTags);
  //   };
  //   const selectSubscribe = () => {
  //      toggleSubscribed(true);
  //      toggleSelectAll(true);
  //      changeTags(
  //        tags.map(tag => {
  //          if (tag.isSubscribed) return { ...tag, isSelected: true };
  //          else return { ...tag, isSelected: false };
  //        })
  //      );
  //   };
  //   const handleAll = () => {
  //      toggleSubscribed(false);
  //      toggleSelectAll(true);
  //      changeTags(
  //        tags.map(tag => {
  //          return { ...tag, isSelected: true };
  //        })
  //      );
  //   };

  return (
    <Modal open={props.open} onClose={props.onClose} className={classes.modal}>
      <div className={classes.paper}>
        <CardContent>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-checkbox">Tags</InputLabel>
            <Select
              multiple
              value={tagNames}
              onChange={props.filter}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(" • ")}
              MenuProps={MenuProps}
            >
              {props.tags.map(tag => (
                <MenuItem key={tag.tag_id} value={tag.name}>
                  <Checkbox checked={tag.isSelected} />
                  <ListItemText primary={tag.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
        {/* <Button
          onClick={handleAll}
          variant="contained"
          color="primary"
          style={{ width: 105, margin: 10 }}
        >
          All
        </Button>
        <Button
          onClick={selectSubscribe}
          variant="contained"
          color="primary"
          style={{ width: 105, margin: 10 }}
        >
          Subscribed
        </Button>

        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectAll}
                onChange={handleSelectAll}
                value={selectAll}
              />
            }
            label="Select All"
          />
          {tags
            .filter(tag => tag.isSubscribed || !showOnlySubscribed)
            .map((tag, index) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={tag.isSelected}
                      onChange={handleChange(index)}
                      value={tag.title}
                    />
                  }
                  label={tag.title}
                />
              );
            })}
        </FormGroup> */}
      </div>
    </Modal>
  );
};

export default FilterModal;
