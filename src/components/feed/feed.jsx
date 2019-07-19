import React, { Component } from "react";
import FeedPost from "./feedPost";
import axios from "axios";
import { API_ROOT } from "../../api-config";

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

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getItems();
    // this.setState({
    //   posts: [
    //     samplePost,
    //     samplePost,
    //     samplePost,
    //     samplePost,
    //     samplePost,
    //     samplePost,
    //     samplePost
    //   ]
    // });
  }

  getItems() {
    axios
      .get(`${API_ROOT}/events/feed/`, { withCredentials: true })
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="feed-container">
        {this.state.posts.map((post, index) => (
          <FeedPost post={post} key={index} />
        ))}
      </div>
    );
  }
}

export default Feed;
