import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import Card from "./card";
import "./mess.css";

class Mess extends Component {
  constructor() {
    super();
    const d = new Date();

    this.state = {
      Halls: [1, 2, 3, 4, 5, 6],
      days: [0, 1, 2, 3, 4, 5, 6],
      daysName: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      selectedHall: 1,
      hallName: "Hall 1",
      selectedDay: d.getDay(),
      isMobile: window.innerWidth < 600
    };
  }

  handleClick = (hallNumber, hallName) => {
    this.setState({
      selectedHall: hallNumber,
      hallName: hallName
    });
  };

  handleClickday = day => {
    this.setState({
      selectedDay: day
    });
  };

  handleChange = (event, newValue) => {
    this.setState({
      selectedDay: newValue
    });
  };

  styles = {
    slideContainer: {
      WebkitOverflowScrolling: "touch" // iOS momentum scrolling
    },
    slide: {
      padding: 15
    }
  };

  renderDesktop = () => {
    return (
      <Card
        day={this.state.selectedDay}
        selectedHall={this.state.selectedHall}
      />
    );
  };

  renderMobile = () => {
    return (
      <React.Fragment>
        <Tabs
          value={this.state.selectedDay}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Sunday" />
          <Tab label="Monday" />
          <Tab label="Tuesday" />
          <Tab label="Wednesday" />
          <Tab label="Thursday" />
          <Tab label="Friday" />
          <Tab label="Saturday" />
        </Tabs>
        <SwipeableViews
          index={this.state.selectedDay}
          onChangeIndex={this.handleClickday}
          containerStyle={this.styles.slideContainer}
        >
          <div style={this.styles.slide}>
            <Card day={0} selectedHall={this.state.selectedHall} />
          </div>
          <div style={this.styles.slide}>
            <Card day={1} selectedHall={this.state.selectedHall} />
          </div>
          <div style={this.styles.slide}>
            <Card day={2} selectedHall={this.state.selectedHall} />
          </div>
          <div style={this.styles.slide}>
            <Card day={3} selectedHall={this.state.selectedHall} />
          </div>
          <div style={this.styles.slide}>
            <Card day={4} selectedHall={this.state.selectedHall} />
          </div>
          <div style={this.styles.slide}>
            <Card day={5} selectedHall={this.state.selectedHall} />
          </div>
          <div style={this.styles.slide}>
            <Card day={6} selectedHall={this.state.selectedHall} />
          </div>
        </SwipeableViews>
      </React.Fragment>
    );
  };

  renderDropDown = () => {
    return (
      <div className="col-3 mt-2">
        <DropdownButton
          id="dropdown-basic-button"
          title={this.state.daysName[this.state.selectedDay]}
        >
          <Dropdown.Item
            onClick={() => {
              this.handleClickday(0);
            }}
          >
            Sunday
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              this.handleClickday(1);
            }}
          >
            Monday
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              this.handleClickday(2);
            }}
          >
            Tuesday
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              this.handleClickday(3);
            }}
          >
            Wednesday
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              this.handleClickday(4);
            }}
          >
            Thursday
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              this.handleClickday(5);
            }}
          >
            Friday
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              this.handleClickday(6);
            }}
          >
            Saturday
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  };
  render() {
    return (
      <div className="container">
        {/* {console.log(this.state.today)} */}
        <div className="row">
          <div className="left-pad-desk col-3 mt-2">
            <DropdownButton
              id="dropdown-basic-button"
              title={this.state.hallName}
            >
              <table>
                <tbody>
                  <tr>
                    <td>
                      <Dropdown.Item
                        onClick={() => {
                          this.handleClick(1, "Hall 1");
                        }}
                      >
                        Hall 1
                      </Dropdown.Item>
                    </td>
                    <td>
                      <Dropdown.Item
                        onClick={() => {
                          this.handleClick(2, "Hall 2");
                        }}
                      >
                        Hall 2
                      </Dropdown.Item>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Dropdown.Item
                        onClick={() => {
                          this.handleClick(3, "Hall 3");
                        }}
                      >
                        Hall 3
                      </Dropdown.Item>
                    </td>
                    <td>
                      <Dropdown.Item
                        onClick={() => {
                          this.handleClick(4, "Hall 4");
                        }}
                      >
                        Hall 4
                      </Dropdown.Item>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Dropdown.Item
                        onClick={() => {
                          this.handleClick(5, "Hall 5");
                        }}
                      >
                        Hall 5
                      </Dropdown.Item>
                    </td>
                    <td>
                      <Dropdown.Item
                        onClick={() => {
                          this.handleClick(6, "Hall 6");
                        }}
                      >
                        Hall 6
                      </Dropdown.Item>
                    </td>
                  </tr>
                </tbody>
              </table>
            </DropdownButton>
          </div>
          {this.state.isMobile ? "" : this.renderDropDown()}
        </div>

        <br />
        <div className="row">
          <h1 className="left-pad">{this.state.hallName}</h1>
        </div>
        {this.state.isMobile ? this.renderMobile() : this.renderDesktop()}
      </div>
    );
  }
}

export default Mess;
