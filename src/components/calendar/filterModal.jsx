import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox
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
      let tag = tempTags[index];
      tempTags[index] = {
         ...tag,
         isSelected: data
      };
      changeTags(tempTags);
   }

   const handleSelectAll = (e, checked) => {
      toggleSelectAll(checked);
      if(showOnlySubscribed){
         changeTags(tags.map(tag => {
            if(tag.isSubscribed)
               return { ...tag, isSelected: checked};
            else
               return { ...tag, isSelected: checked};
         }));
      }
      else{
         console.log("Here");
         console.log(checked);
         changeTags(tags.map(tag => { return {...tag, isSelected: checked};}));
         console.log(tags);
      }
   };
   const selectSubscribe = () => {
      toggleSubscribed(true);
      handleSelectAll(undefined, true);
   };
   const handleAll = () => { 
      toggleSubscribed(false);
      toggleSelectAll(undefined, false);
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
