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
import { API_ROOT } from "../../api-config";

const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map(k => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue"
    }
  });

function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let colour = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += `00${value.toString(16)}`.substr(-2);
  }
  return colour;
}

const toCalendarPost = event => {
  const startDt = new moment(event.date+event.start_time, 'YYYY-MM-DDHH:mm:ss');
  const endDt = new moment(event.date+event.end_time,'YYYY-MM-DDHH:mm:ss');
  const clPost = {
    event_id: event.event_id,
    title: event.title,
    start: startDt.toDate(),
    end: endDt.toDate(),
    allDay: event.day_long
  };
  return clPost;
};

const fetchedPost = i => {
  return {
    event_id: 1,
    title: "Lecture on Bash and Git",
    summary:
      "This lecture will cover the fundamentals of bash scripting, and will also teach you about the Git version control system.",
    date: '2019-08-15',
    tags: [{ name: "Programming Club", tag_id: 1, description: "SnT Club" }],
    start_time: "18:30:00",
    end_time: "22:00:00",
    venue: "RM101",
    day_long: false,
    description:
      "The topics covered would briefly include introduction to terminal, package managers and the use of Git. It's useful to be familiar with the terminal and the Linux environment for any coding task. Version control tools like Git helps in better flow control and collaboration of code, it is an essential skill.",
    hash_tags: ["PClub", "Git", "Bash"]
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
      tags: [],
      selectedTags : [],
    };
  }

  componentDidMount() {
    /* FETCH MONTH'S EVENTS */
    const dt = this.state.date;
    this.getItems(dt.getMonth() + 1, dt.getFullYear());
    /* OR USE HARDCODED EVENTS */
    // let events = new Array(4).fill(1).map((val, index) => fetchedPost(index));
  }

  toggleFilterBox = () => {
    this.setState({ filterBoxOpen: !this.state.filterBoxOpen });
  };

  toggleEventBox = () => {
    this.setState({ eventBoxOpen: !this.state.eventBoxOpen });
  };

  getItems(month, year) {
    let url = `${API_ROOT}/events/all`;
    if (month && year) url += `/?month=${month}&year=${year}`;
    axios
      .get(url, {
        withCredentials: true
      })
      .then(res => {
        let events = res.data;
        events.forEach(event => {
          event.id = event.event_id;
          event.start = event.date;
          event.end = event.date;
        });
        const tags = {};
        events = events.map(event => {
          event.tags.forEach(tag => {
            tag.isSelected = true;
            if (!tags[tag.tag_id]) {
              tag.color = stringToColor(tag.name);
              tags[tag.tag_id] = tag;
            }
          });
          return event;
        });
        this.setState({
          allEvents: events,
          filteredEvents: events,
          tags: Object.values(tags),
        });
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

  filterTags = (tag) => {
    const name = tag;
    const newTags = [...this.state.tags];
    const index = newTags.findIndex(t => t.name === name);
    newTags[index].isSelected = true;
    this.setState({
      tags: newTags,
      filteredEvents: this.filterEvents(newTags)
    });
  };

  handleDelete = (tag) =>
  {
    const newTags = [...this.state.tags];
    const index = newTags.findIndex(t => t.name === tag.name);
    newTags[index].isSelected = false;
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
      ev => ev.event_id === e.event_id
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
          Unselect={this.handleDelete}
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
