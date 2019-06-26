import React, { Component } from "react";
import { Button } from "@material-ui/core";
import FilterBox from "./filterModal";
import { Calendar as CalendarBox, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })


class Calendar extends Component {
  state = {
    events: [
      {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2015, 3, 0),
        end: new Date(2015, 3, 1),
      },
      {
        id: 1,
        title: 'Long Event',
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10),
      },
    
      {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0),
      }
    ],
    filterBoxOpen: false
  };
  openFilterBox = () => {this.setState({filterBoxOpen: true})};
  handleClose = () => {
    this.setState({filterBoxOpen: false});
  }
  render() {
    return (
      <React.Fragment>
        {/* <div> */}
        <div style={{padding: "5px", textAlign: "right"}}>
          <Button
              onClick={this.openFilterBox}
              variant="contained"
              color="primary"
              // style={{ width: 105, margin: 10 }}
            >
              Filter
          </Button>
          </div>
        <CalendarBox
          events={this.state.events}
          views={allViews}
          step={60}
          showMultiDayTimes
          defaultDate={new Date(2015, 3, 1)}
          components={{
            timeSlotWrapper: ColoredDateCellWrapper,
          }}
          localizer={localizer}
        />
        <FilterBox open={this.state.filterBoxOpen} onClose={this.handleClose}></FilterBox>
      </React.Fragment>
    );
  }
}

export default Calendar;
