import React, { Component } from "react";
import { Button, Modal } from "@material-ui/core";
import FilterBox from "./filterModal";
import {
  Calendar as CalendarBox,
  Views,
  momentLocalizer
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import FeedPost from "../feed/feedPost.jsx";
import axios from "axios";

const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map(k => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue"
    }
  });

// const routing = (
//   <Router>
//     <div>
//       <Route
//         path="/:id_fetched"
//         render={props => (
//           <FeedPost
//             post={{
//               event: {
//                 title: "Hello",
//                 start_time: "12:23:12",
//                 end_time: "14:12:12",
//                 date: "2019-08-09",
//                 venue: "RM101",
//                 description: "asad",
//                 summary: "wdusi"
//               },
//               tag: { name: "asa", tag_id: "9" }
//             }}
//           />
//         )}
//       />
//     </div>
//   </Router>
// );

const toCalendarPost = event => {
  const dtString = event.event.date.toISOString().slice(0, 10);
  const clPost = {
    event_id: event.event.event_id,
    title: event.event.title,
    // Use opposite time offset to balance toISOString() conversion to UTC
    start: new Date(`${dtString}T${event.event.start_time}-05:30`),
    end: new Date(`${dtString}T${event.event.end_time}-05:30`),
    allDay: event.event.allDay
  };
  return clPost;
};

const toFeedPost = event => {
  const post = {
    event: {
      event_id: event.event.event_id,
      title: event.event.title,
      by: event.event.by,
      summary: event.event.summary,
      date: event.event.date,
      start_time: event.event.start_time,
      end_time: event.event.end_time,
      venue: event.event.venue,
      allDay: event.event.day_long,
      description: event.event.description
    },
    tags: [...event.tags]
  };
  return post;
};

const fetchedPost = i => {
  return {
    event: {
      event_id: i,
      title: "Lecture on Bash and Git",
      by: "Programming Club",
      summary:
        "This lecture will cover the fundamentals of bash scripting, and will also teach you about the Git version control system.",
      date: new Date(2019, 7, 15),
      start_time: "18:30:00",
      end_time: "22:00:00",
      venue: "RM101",
      day_long: false,
      description:
        "The topics covered would briefly include introduction to terminal, package managers and the use of Git. It's useful to be familiar with the terminal and the Linux environment for any coding task. Version control tools like Git helps in better flow control and collaboration of code, it is an essential skill."
    },
    tags: [
      { name: "PClub", tag_id: 1, description: "SnT Club" },
      { name: "Git", tag_id: 2, description: "Version control system" },
      { name: "Bash", tag_id: 3, description: "Default shell for linux" }
    ]
  };
};

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: [],
      filteredEvents: [],
      date: new Date(),
      filterBoxOpen: false,
      eventBoxOpen: false,
      tags: []
    };
  }

  componentDidMount() {
    /* FETCH MONTH'S EVENTS */
    // const dt = this.state.date;
    // let events = this.getItems(dt.getMonth() + 1, dt.getFullYear());
    /* OR USE HARDCODED EVENTS */
    let events = new Array(4).fill(1).map((val, index) => fetchedPost(index));
    const tags = {};
    events = events.map(event => {
      event.tags.forEach(tag => {
        tag.isSelected = true;
        if (!tags[tag.tag_id]) tags[tag.tag_id] = tag;
      });
      return toFeedPost(event);
    });
    this.setState({
      allEvents: events,
      filteredEvents: events,
      tags: Object.values(tags)
    });
  }

  toggleFilterBox = () => {
    this.setState({ filterBoxOpen: !this.state.filterBoxOpen });
  };

  toggleEventBox = () => {
    this.setState({ eventBoxOpen: !this.state.eventBoxOpen });
  };

  getItems(month, year) {
    let url = "http://localhost:8000/events/view/month";
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
        return events;
      })
      .catch(err => console.log(err));
  }

  onNavigate = newDt => {
    const currDt = this.state.date;
    if (
      currDt.getMonth() !== newDt.getMonth() ||
      currDt.getFullYear() !== newDt.getFullYear()
    ) {
      this.getItems(newDt.getMonth() + 1, newDt.getFullYear());
    }
    this.setState({ date: newDt });
  };

  filterTags = (event, tag) => {
    const id = tag.key;
    const newTags = [...this.state.tags];
    const index = newTags.findIndex(t => t.tag_id === parseInt(id));
    newTags[index].isSelected = !newTags[index].isSelected;
    this.setState({
      tags: newTags,
      filteredEvents: this.filterEvents(newTags)
    });
  };

  filterEvents = tags => {
    const events = [...this.state.allEvents];
    const filteredEvents = events.filter(event => {
      const index = event.tags.findIndex(
        tag => tags.find(t => t.tag_id === tag.tag_id).isSelected
      );
      return index !== -1;
    });
    return filteredEvents;
  };

  onEventClick = (e, event) => {
    const selEvent = this.state.allEvents.find(
      ev => ev.event.event_id === e.event_id
    );
    this.setState({ currPost: selEvent, eventBoxOpen: true });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ padding: "5px", textAlign: "right" }}>
          <Button
            onClick={this.toggleFilterBox}
            variant="contained"
            color="primary"
          >
            Filter
          </Button>
        </div>

        <CalendarBox
          events={this.state.filteredEvents.map(event => toCalendarPost(event))}
          views={allViews}
          step={60}
          showMultiDayTimes
          date={this.state.date}
          components={{
            timeSlotWrapper: ColoredDateCellWrapper
          }}
          localizer={localizer}
          onSelectEvent={this.onEventClick}
          onNavigate={this.onNavigate}
        />
        <FilterBox
          tags={this.state.tags}
          filter={this.filterTags}
          open={this.state.filterBoxOpen}
          onClose={this.toggleFilterBox}
        />
        <Modal
          open={this.state.eventBoxOpen}
          onClose={this.toggleEventBox}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <FeedPost post={this.state.currPost} />
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
// ReactDOM.render(routing, document.getElementById("root"));
export default Calendar;
