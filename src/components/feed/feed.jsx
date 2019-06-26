import React, { Component } from "react";
import FeedPost from "./feedPost";

// This sample post shows the format the post objects fetched should be converted to.
// DONT REMOVE this sample post when no longer necessary. It would probably be
// useful when making documentation or for someone working here sometime later.
const samplePost = {
  event: {
    title: "Lecture on Bash and Git",
    summary:
      "This lecture will cover the fundamentals of bash scripting, and will also teach you about the Git version control system.",
    dateTime: "6-8 pm | June 1 | RM 101",
    description:
      "The topics covered would briefly include introduction to terminal, package managers and the use of Git. It's useful to be familiar with the terminal and the Linux environment for any coding task. Version control tools like Git helps in better flow control and collaboration of code, it is an essential skill."
  },
  club: {
    name: "Programming Club",
    image: "avatar.png"
  }
};

class Feed extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    // FETCH THE POSTS HERE
    this.setState({
      posts: [
        samplePost,
        samplePost,
        samplePost,
        samplePost,
        samplePost,
        samplePost,
        samplePost
      ]
    });
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
