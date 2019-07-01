import React, { Component } from "react";
import CreateEvent from "./createEvent";
import EventCard from "./eventCard";

// Sample post for frontend testing
const samplePost = {
  event_id: 1,
  title: "Lecture on Bash and Git",
  summary:
    "This lecture will cover the fundamentals of bash scripting, and will also teach you about the Git version control system.",
  date: "2019-08-16",
  by: "Programming Club",
  start_time: "18:30:00",
  end_time: "22:00:00",
  venue: "RM101",
  day_long: false,
  description:
    "The topics covered would briefly include introduction to terminal, package managers and the use of Git. It's useful to be familiar with the terminal and the Linux environment for any coding task. Version control tools like Git helps in better flow control and collaboration of code, it is an essential skill.",
  tags: [
    { name: "PClub", tag_id: 1, description: "SnT Club" },
    { name: "Git", tag_id: 2, description: "Version control system" },
    { name: "Bash", tag_id: 3, description: "Default shell for linux" }
  ]
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
        tag: { tag_id: 1, name: "Programming Club", description: "Club" }
      },
      events: new Array(3).fill(samplePost)
    });
  }

  toggleCreateBox = () => {
    this.setState({ createBoxOpen: !this.state.createBoxOpen });
  };

  createEvent = data => {
    console.log(data);
  };

  deleteEvent = id => {
    //Send event deletion request here
    const newEvents = [...this.state.events];
    const index = newEvents.findIndex(ev => ev.event_id === id);
    newEvents.splice(index, 1);
    this.setState({ events: newEvents });
  };

  renderPosts = () => {
    return this.state.events.map(event => (
      <EventCard post={event} delete={this.deleteEvent} />
    ));
  };

  render() {
    return (
      <React.Fragment>
        {!!this.state.events && this.renderPosts()}
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
