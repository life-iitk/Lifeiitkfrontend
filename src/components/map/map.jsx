// https://www.azavea.com/blog/2016/12/05/getting-started-with-react-and-leaflet/

import React, { Component } from "react";
import {
  Map as LeafletMap,
  Marker,
  Popup,
  ImageOverlay,
  ZoomControl
} from "react-leaflet";
import campusMap from "./campusMap.jpg";
import academicAreaMap from "./academicAreaMap.jpg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./map.css";
var Leaflet = require("leaflet");

class Map extends Component {
  state = {
    selectedView: 0,
    campusLocations: [
      { id: 1, venueName: "Hall 1", latitude: 1400, longitude: 1450 },
      { id: 2, venueName: "Hall 2", latitude: 2000, longitude: 1720 },
      { id: 3, venueName: "Hall 3", latitude: 2005, longitude: 1300 },
      { id: 4, venueName: "Hall 4", latitude: 1492, longitude: 950 },
      { id: 5, venueName: "Hall 5", latitude: 2300, longitude: 1475 },
      { id: 7, venueName: "Hall 7", latitude: 2310, longitude: 810 },
      { id: 8, venueName: "Hall 8", latitude: 2310, longitude: 460 },
      { id: 9, venueName: "Hall 9", latitude: 2615, longitude: 1053 },
      { id: 10, venueName: "Hall 10", latitude: 2615, longitude: 740 },
      { id: 11, venueName: "Hall 11", latitude: 2615, longitude: 415 },
      { id: 12, venueName: "Hall 12", latitude: 2500, longitude: 1690 },
      { id: 13, venueName: "Hall 13", latitude: 2580, longitude: 1430 },
      { id: 14, venueName: "Tennis Court", latitude: 1950, longitude: 1480 },
      { id: 15, venueName: "New SAC", latitude: 1930, longitude: 437 },
      { id: 16, venueName: "GH1", latitude: 1160, longitude: 1045 },
      { id: 17, venueName: "GHT", latitude: 1090, longitude: 750 },
      { id: 18, venueName: "GH2", latitude: 890, longitude: 570 },
      { id: 19, venueName: "Swimming Pool", latitude: 1560, longitude: 450 },
      { id: 20, venueName: "Health Centre", latitude: 1130, longitude: 529 },
      { id: 21, venueName: "Academic Area", latitude: 1292, longitude: 1975 },
      { id: 22, venueName: "Visitors Hostel", latitude: 870, longitude: 1015 },
      { id: 23, venueName: "Auditorium", latitude: 630, longitude: 2080 },
      { id: 24, venueName: "Shopping Centre", latitude: 630, longitude: 1765 },
      {
        id: 25,
        venueName: "New Shopping Centre",
        latitude: 1410,
        longitude: 150
      },
      {
        id: 26,
        venueName: "Outreach Auditorium",
        latitude: 920,
        longitude: 1395
      },
      { id: 27, venueName: "Director Bungalow", latitude: 670, longitude: 800 }
    ],
    acadsAreaLocations: [
      { id: 1, venueName: "BSBE", latitude: 630, longitude: 100 },
      { id: 2, venueName: "Tutorial Complex", latitude: 500, longitude: 110 },
      { id: 3, venueName: "Old Lecture Halls", latitude: 420, longitude: 195 },
      { id: 4, venueName: "ACMS", latitude: 635, longitude: 200 },
      { id: 5, venueName: "SCDT", latitude: 540, longitude: 250 },
      { id: 6, venueName: "New Lecture Halls", latitude: 345, longitude: 120 },
      { id: 7, venueName: "Western Lab", latitude: 595, longitude: 345 },
      { id: 8, venueName: "Civil Engg. Lab", latitude: 655, longitude: 460 },
      { id: 9, venueName: "ACES", latitude: 530, longitude: 455 },
      { id: 10, venueName: "Faculty Building", latitude: 395, longitude: 440 },
      { id: 11, venueName: "Core Lab", latitude: 430, longitude: 545 },
      { id: 12, venueName: "Chemical", latitude: 500, longitude: 700 },
      { id: 13, venueName: "GATE/JEE", latitude: 642, longitude: 695 },
      { id: 14, venueName: "SIIC", latitude: 675, longitude: 795 },
      { id: 15, venueName: "New Core Lab", latitude: 675, longitude: 945 },
      { id: 16, venueName: "Wind Tunnel", latitude: 555, longitude: 835 },
      { id: 17, venueName: "Aerospace", latitude: 400, longitude: 855 },
      { id: 18, venueName: "CESE", latitude: 240, longitude: 865 },
      { id: 19, venueName: "IME", latitude: 355, longitude: 680 },
      { id: 20, venueName: "Mechanical", latitude: 300, longitude: 595 },
      { id: 21, venueName: "Nuclear Physics", latitude: 270, longitude: 650 },
      {
        id: 22,
        venueName: "P.K. Kelkar Library",
        latitude: 265,
        longitude: 335
      },
      { id: 23, venueName: "Faculty Lounge", latitude: 216, longitude: 235 },
      { id: 24, venueName: "Southern Lab", latitude: 160, longitude: 190 },
      { id: 25, venueName: "Computer Center", latitude: 200, longitude: 540 },
      { id: 26, venueName: "Computer Science", latitude: 170, longitude: 600 },
      { id: 27, venueName: "Generator Room", latitude: 120, longitude: 695 },
      { id: 28, venueName: "AMS", latitude: 150, longitude: 775 },
      { id: 29, venueName: "Nursery", latitude: 75, longitude: 861 },
      { id: 30, venueName: "Central Workshop", latitude: 650, longitude: 590 },
      { id: 31, venueName: "Workshop", latitude: 590, longitude: 590 },
      {
        id: 32,
        venueName: "Silver Jubilee Landmark",
        latitude: 340,
        longitude: 235
      },
      { id: 33, venueName: "DOAA Canteen", latitude: 575, longitude: 660 },
      { id: 34, venueName: "Canteen", latitude: 225, longitude: 610 }
    ],
    centerCampus: [1466, 1262],
    centerAcadsArea: [421, 640]
  };

  handleOnOpenCampus = (latitude, longitude) => {
    this.setState({ centerCampus: [latitude, longitude] });
  };

  handleOnOpenAcads = (latitude, longitude) => {
    this.setState({ centerAcadsArea: [latitude, longitude] });
  };

  handleChange = (event, newValue) => {
    this.setState({ selectedView: newValue });
  };

  renderCampusMarkers = () => {
    return (
      <React.Fragment>
        {this.state.campusLocations.map(item => {
          return (
            <Marker position={[item.latitude, item.longitude]} key={item.id}>
              <Popup
                onOpen={() =>
                  this.handleOnOpenCampus(item.latitude, item.longitude)
                }
              >
                <span>{item.venueName}</span>
              </Popup>
            </Marker>
          );
        })}
      </React.Fragment>
    );
  };

  renderAcademicAreaMarkers = () => {
    return (
      <React.Fragment>
        {this.state.acadsAreaLocations.map(item => {
          return (
            <Marker position={[item.latitude, item.longitude]} key={item.id}>
              <Popup
                onOpen={() =>
                  this.handleOnOpenAcads(item.latitude, item.longitude)
                }
              >
                <span>{item.venueName}</span>
              </Popup>
            </Marker>
          );
        })}
      </React.Fragment>
    );
  };

  render() {
    const boundsCampus = [[0, 0], [2932, 2524]];
    const boundsAcademicArea = [[0, 0], [842, 1280]];

    return (
      <React.Fragment>
        <Tabs
          value={this.state.selectedView}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          scrollButtons="auto"
        >
          <Tab label="Campus" />
          <Tab label="Academic Area" />
        </Tabs>
        <br />
        <div>
          <LeafletMap
            bounds={
              this.state.selectedView === 0 ? boundsCampus : boundsAcademicArea
            }
            center={
              this.state.selectedView === 0
                ? this.state.centerCampus
                : this.state.centerAcadsArea
            }
            minZoom={this.state.selectedView === 0 ? -2 : -1}
            maxZoom={1}
            zoom={this.state.selectedView === 0 ? 0 : 1}
            attributionControl={true}
            zoomControl={false}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            crs={Leaflet.CRS.Simple}
          >
            <ImageOverlay
              url={this.state.selectedView === 0 ? campusMap : academicAreaMap}
              bounds={
                this.state.selectedView === 0
                  ? boundsCampus
                  : boundsAcademicArea
              }
            />

            {this.state.selectedView === 0
              ? this.renderCampusMarkers()
              : this.renderAcademicAreaMarkers()}

            <ZoomControl position="topright" />
          </LeafletMap>
        </div>
      </React.Fragment>
    );
  }
}

export default Map;
