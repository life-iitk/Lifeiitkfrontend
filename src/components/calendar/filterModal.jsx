import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import Calendar from "./calendar";

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
   }
 }));

 const FilterModal = props => {
   const classes = useStyles();
   const [showOnlySubscribed, toggleSubscribed] = React.useState(false);
   const [selectAll, toggleSelectAll] = React.useState(false);
   const [tags, changeTags] = React.useState(
      [
         {
            id: 1,
            title: "tag1",
            isSubscribed: true,
            isSelected: false
         },
         {
            id: 2,
            title: "tag2",
            isSubscribed: false,
            isSelected: false
         }
      ]
   );

   const handleChange = index => (e, data) => {
      toggleSelectAll(false);
      let tempTags = [...tags];
      tempTags[index].isSelected = data;
      changeTags(tempTags);
      props.filter(tempTags);
   }

   const handleSelectAll = (e, checked) => {
      toggleSelectAll(checked);
      console.log(checked);
      let newTags = [...tags]
      if(showOnlySubscribed){
         newTags = tags.map(tag => {
            if(tag.isSubscribed)
               return { ...tag, isSelected: checked};
            else
               return { ...tag, isSelected: false};
         });
      }
      else{
         newTags = tags.map(tag => { return {...tag, isSelected: true}})
      }
      changeTags(newTags);
      console.log(newTags);
      props.filter(newTags);
   };
   const selectSubscribe = () => {
      toggleSubscribed(true);
      toggleSelectAll(true);
      changeTags(tags.map(tag => {
         if(tag.isSubscribed)
            return { ...tag, isSelected: true};
         else
            return { ...tag, isSelected: false};
         }));
   };
   const handleAll = () => { 
      toggleSubscribed(false);
      toggleSelectAll(true);
      changeTags(tags.map(tag => { return {...tag, isSelected: true};}));
    };

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
            <Button
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
                        <Checkbox checked={selectAll} onChange={handleSelectAll} value={selectAll} />
                  }
                  label="Select All"
               />
               {tags.filter(tag => tag.isSubscribed || !showOnlySubscribed).map((tag, index) => {
                  return (<FormControlLabel 
                     control={
                     <Checkbox checked={tag.isSelected} onChange={handleChange(index)} value={tag.title} />
                  }
                     label={tag.title}
                  />);
               })}
            </FormGroup>
         </div>
      </Modal>
   );
};

export default FilterModal;
