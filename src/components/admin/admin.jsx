import React, { Component } from "react";
import CreateEvent from "./createEvent";
import EventCard from "./eventCard";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

// Sample post for frontend testing
const samplePost = {
  event_id: 1,
  title: "Lecture on Bash and Git",
  summary:
    "This lecture will cover the fundamentals of bash scripting, and will also teach you about the Git version control system.",
  date: new Date(2019, 7, 16),
  tags: [{ name: "Programming Club", tag_id: 1, description: "SnT Club" }],
  start_time: "18:30:00",
  end_time: "22:00:00",
  venue: "RM101",
  day_long: false,
  description:
    "The topics covered would briefly include introduction to terminal, package managers and the use of Git. It's useful to be familiar with the terminal and the Linux environment for any coding task. Version control tools like Git helps in better flow control and collaboration of code, it is an essential skill.",
  hash_tags: ["PClub", "Git", "Bash"]
};

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privilege: props.privilege,
      events: [],
      createBoxOpen: false
    };
  }

  componentDidMount() {
    // Fetch events here
    this.setState({
      privilege: {
        user: "user",
        tag: [{ tag_id: 1, name: "Programming Club", description: "Club" }]
      },
      events: new Array(3).fill(samplePost)
    });
  }

  toggleCreateBox = () => {
    this.setState({ createBoxOpen: !this.state.createBoxOpen });
  };

  createEvent = data => {
    this.setState({ createBoxOpen: false });
    data.tags = this.state.privilege.tag;
    data.date = new Date(data.date);
    const newEvents = [...this.state.events];
    newEvents.push(data);
    this.setState({ events: newEvents });
  };

  deleteEvent = id => {
    //Send event deletion request here
    const newEvents = [...this.state.events];
    const index = newEvents.findIndex(ev => ev.event_id === id);
    newEvents.splice(index, 1);
    this.setState({ events: newEvents });
  };

  renderPosts = () => {
    return this.state.events.map((event, index) => (
      <EventCard post={event} delete={this.deleteEvent} key={index} />
    ));
  };

  render() {
    return (
      <React.Fragment>
        {!!this.state.events && this.renderPosts()}
        <Fab
          color="primary"
          size="large"
          onClick={this.toggleCreateBox}
          style={{ position: "fixed", bottom: 40, right: 40 }}
        >
          <AddIcon />
        </Fab>
        <CreateEvent
          priv={this.state.privilege}
          open={this.state.createBoxOpen}
          onClose={this.toggleCreateBox}
          create={this.createEvent}
        />
      </React.Fragment>
    );
  }
}

export default Admin;
