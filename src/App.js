import React, { Component } from "react";
// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SideBar from "./components/sidebar/sidebar";
import TopBar from "./components/topbar/topbar";
import Main from "./components/main";
import LoginBox from "./components/login/loginBox";
import { CssBaseline } from "@material-ui/core";

class App extends Component {
  // 'icon' property in pages is the Material Icons icon name.
  constructor() {
    super();
    this.state = {
      pages: [
        { name: "Feed", icon: "rss_feed" },
        { name: "Calendar", icon: "calendar_today" },
        { name: "Map", icon: "map" },
        { name: "Mess", icon: "restaurant" },
        { name: "Search", icon: "search" },
        { name: "Profile", icon: "account_circle" }
      ],
      activePage: 0,
      sidebarActive: false,
      loginBoxOpen: false
    };
  }

  sidebarToggleHandler = () => {
    this.setState({ sidebarActive: !this.state.sidebarActive });
  };

  loginBoxToggleHandler = () => {
    this.setState({ loginBoxOpen: !this.state.loginBoxOpen });
  };

  switchPage = pgName => {
    const newActive = this.state.pages.findIndex(pg => pg.name === pgName);
    this.setState({ activePage: newActive });
  };

  render() {
    console.log(this.state.activePage);
    return (
      <div
        style={{
          display:
            this.state.activePage === 3 && window.innerWidth < 600 ? "" : "flex" //overflow in mess ui mobile view
        }}
      >
        <CssBaseline />
        <TopBar
          toggleSidebar={this.sidebarToggleHandler}
          currentPage={this.state.pages[this.state.activePage]}
          openLogin={this.loginBoxToggleHandler}
        />
        <SideBar
          pages={this.state.pages}
          activePage={this.state.activePage}
          pageHandler={this.switchPage}
          handleToggle={this.sidebarToggleHandler}
          open={this.state.sidebarActive}
          openLogin={this.loginBoxToggleHandler}
        />
        {/* Container for the main body */}
        <Main page={this.state.pages[this.state.activePage]} />
        <LoginBox
          open={this.state.loginBoxOpen}
          onClose={this.loginBoxToggleHandler}
        />
      </div>
    );
  }
}

export default App;
