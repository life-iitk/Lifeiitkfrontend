import React, { Component } from "react";
import { Button } from "@material-ui/core";
import FilterBox from "./filterModal";
import {
  Calendar as CalendarBox,
  Views,
  momentLocalizer
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import FeedPost from "../feed/feedPost";
import ReactDOM from "react-dom";
import axios from "axios";

const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map(k => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue"
    }
  });

var id_fetched = "";

const routing = (
  <Router>
    <div>
      <Route
        path="/:id_fetched"
        render={props => (
          <FeedPost
            post={{
              event: {
                title: "Hello",
                start_time: "12:23:12",
                end_time: "14:12:12",
                date: "2019-08-09",
                venue: "RM101",
                description: "asad",
                summary: "wdusi"
              },
              tag: { name: "asa", tag_id: "9" }
            }}
          />
        )}
      />
    </div>
  </Router>
);

const sampleEvents = {
  id: 3,
  title: "Lecture on Bash and Git",
  start: new Date(2015, 4, 12),
  end: new Date(2015, 4, 15)
};

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      date: new Date()
    };
    // this.onNavigate.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  openFilterBox = () => {
    this.setState({ filterBoxOpen: true });
  };
  handleClose = () => {
    this.setState({ filterBoxOpen: false });
  };

  getItems(month, year) {
    let url = "http://172.17.76.79:8000/events/view/month";
    if (month && year) url += `/?month=${month}&year=${year}`;
    axios
      .get(url, {
        withCredentials: true
      })
      .then(res => {
        const events = res.data;
        events.forEach(event => {
          event.id = event.event_id;
          event.start = event.date;
          event.end = event.date;
        });
        this.setState({ events: events });
      })
      .catch(err => console.log(err));
  }

  onNavigate = (newDt, action) => {
    const currDt = this.state.date;
    if (
      currDt.getMonth() !== newDt.getMonth() ||
      currDt.getFullYear() !== newDt.getFullYear()
    ) {
      this.getItems(newDt.getMonth() + 1, newDt.getFullYear());
    }
    this.setState({ date: newDt });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ padding: "5px", textAlign: "right" }}>
          <Button
            onClick={this.openFilterBox}
            variant="contained"
            color="primary"
          >
            Filter
          </Button>
        </div>
        {console.log(this.state.events)}
        <CalendarBox
          events={this.state.events}
          views={allViews}
          step={60}
          showMultiDayTimes
          date={this.state.date}
          components={{
            timeSlotWrapper: ColoredDateCellWrapper
          }}
          localizer={localizer}
          onSelectEvent={(e, event) => {
            id_fetched = e["id"];
            console.log(id_fetched);
            window.location.replace(id_fetched);
          }}
          onNavigate={this.onNavigate}
        />
        <FilterBox open={this.state.filterBoxOpen} onClose={this.handleClose} />
      </React.Fragment>
    );
  }
}
ReactDOM.render(routing, document.getElementById("root"));
export default Calendar;
