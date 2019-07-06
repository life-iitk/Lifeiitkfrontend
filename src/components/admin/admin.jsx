import React, { Component } from "react";
import CreateEvent from "./createEvent";
import EventCard from "./eventCard";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";

// Sample post for frontend testing
// const samplePost = {
//   event_id: 1,
//   title: "Lecture on Bash and Git",
//   summary:
//     "This lecture will cover the fundamentals of bash scripting, and will also teach you about the Git version control system.",
//   date: new Date(2019, 7, 16),
//   tags: [{ name: "Programming Club", tag_id: 1, description: "SnT Club" }],
//   start_time: "18:30:00",
//   end_time: "22:00:00",
//   venue: "RM101",
//   day_long: false,
//   description:
//     "The topics covered would briefly include introduction to terminal, package managers and the use of Git. It's useful to be familiar with the terminal and the Linux environment for any coding task. Version control tools like Git helps in better flow control and collaboration of code, it is an essential skill.",
//   hash_tags: ["PClub", "Git", "Bash"]
// };

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privilege: props.privilege,
      events: [],
      createBoxOpen: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name){
      this.getItems();
    }
  }

  componentDidMount() {
    // Fetch events here
    this.getItems();
    this.setState({});
  }

  getItems() {
    axios
      .get("http://localhost:8000/events/view/tagged_events/?tag_name="+ this.props.name, { withCredentials: true })    
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err));
  }

  toggleCreateBox = () => {
    this.setState({ createBoxOpen: !this.state.createBoxOpen });
  };

  createEvent = data => {
    this.setState({ createBoxOpen: false });
    data.tag_name = this.props.name;
    data.date = new Date(data.date);
    const newEvents = [...this.state.events];
    newEvents.push(data);
    this.setState({ events: newEvents });
  };

  deleteEvent = id => {
    axios({
      method: "delete",
      url: "http://localhost:8000/events/delete/",
      data: { "event_id": id},
      withCredentials: true
    }).then()
      .catch(err => console.log(err));
    const newEvents = [...this.state.events];
    const index = newEvents.findIndex(ev => ev.event_id === id);
    newEvents.splice(index, 1);
    this.setState({ events: newEvents });
  };

  renderPosts = () => {
    console.log(this.state.events);
    return this.state.events.map((event, index) => (
      <EventCard post={event} delete={this.deleteEvent} key={index} name={this.props.name} />
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
