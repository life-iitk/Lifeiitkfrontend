import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sidebar/sidebar";
import TopBar from "./components/topbar/topbar";
import Main from "./components/main";

class App extends Component {
  // 'icon' property in pages is the FontAwesome icon name.
  constructor() {
    super();
    this.state = {
      pages: [
        { name: "Feed", icon: "rss" },
        { name: "Calendar", icon: "calendar" },
        { name: "Map", icon: "map" },
        { name: "Mess", icon: "cutlery" },
        { name: "Search", icon: "search" },
        { name: "Profile", icon: "user" }
      ],
      activePage: 0,
      sidebarActive: true
    };
  }

  sidebarToggleHandler = () => {
    this.setState({ sidebarActive: !this.state.sidebarActive });
  };

  switchPage = page => {
    const newActive = this.state.pages.findIndex(pg => pg.name === page.name);
    this.setState({ activePage: newActive });
  };

  render() {
    return (
      <React.Fragment>
        <TopBar
          onSidebarToggle={this.sidebarToggleHandler}
          currentPage={this.state.pages[this.state.activePage]}
        />
        <SideBar
          pages={this.state.pages}
          activePage={this.state.activePage}
          pageHandler={this.switchPage}
          active={this.state.sidebarActive}
        />
        {/* Container for the main body */}
        <Main
          page={this.state.pages[this.state.activePage]}
          sidebarActive={this.state.sidebarActive}
        />
      </React.Fragment>
    );
  }
}

export default App;
