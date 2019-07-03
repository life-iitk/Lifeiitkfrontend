// https://www.azavea.com/blog/2016/12/05/getting-started-with-react-and-leaflet/
// https://codepen.io/leemark/pen/dGgqLZ styling zoom
import React, { Component } from "react";
import campusMap from "./campusMap.jpg";
import academicAreaMap from "./academicAreaMap.jpg";
import "leaflet-search/src/leaflet-search.js";
import "leaflet-search/src/leaflet-search.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import L from "leaflet";
import "./map.css";

class Map extends Component {
  state = {
    selectedView: 0,
    campusLocations: [
      { id: 1, title: "Hall 1", latitude: 1400, longitude: 1450 },
      { id: 2, title: "Hall 2", latitude: 2000, longitude: 1720 },
      { id: 3, title: "Hall 3", latitude: 2005, longitude: 1300 },
      { id: 4, title: "Hall 4", latitude: 1492, longitude: 950 },
      { id: 5, title: "Hall 5", latitude: 2300, longitude: 1475 },
      { id: 7, title: "Hall 7", latitude: 2310, longitude: 810 },
      { id: 8, title: "Hall 8", latitude: 2310, longitude: 460 },
      { id: 9, title: "Hall 9", latitude: 2615, longitude: 1053 },
      { id: 10, title: "Hall 10", latitude: 2615, longitude: 740 },
      { id: 11, title: "Hall 11", latitude: 2615, longitude: 415 },
      { id: 12, title: "Hall 12", latitude: 2500, longitude: 1690 },
      { id: 13, title: "Hall 13", latitude: 2580, longitude: 1430 },
      { id: 14, title: "Tennis Court", latitude: 1950, longitude: 1480 },
      { id: 15, title: "New SAC", latitude: 1930, longitude: 437 },
      { id: 16, title: "GH1", latitude: 1160, longitude: 1045 },
      { id: 17, title: "GHT", latitude: 1090, longitude: 750 },
      { id: 18, title: "GH2", latitude: 890, longitude: 570 },
      { id: 19, title: "Swimming Pool", latitude: 1560, longitude: 450 },
      { id: 20, title: "Health Centre", latitude: 1130, longitude: 529 },
      { id: 21, title: "Academic Area", latitude: 1292, longitude: 1975 },
      { id: 22, title: "Visitors Hostel", latitude: 870, longitude: 1015 },
      { id: 23, title: "Auditorium", latitude: 630, longitude: 2080 },
      { id: 24, title: "Shopping Centre", latitude: 630, longitude: 1765 },
      {
        id: 25,
        title: "New Shopping Centre",
        latitude: 1410,
        longitude: 150
      },
      {
        id: 26,
        title: "Outreach Auditorium",
        latitude: 920,
        longitude: 1395
      },
      { id: 27, title: "Director Bungalow", latitude: 670, longitude: 800 }
    ],
    acadsAreaLocations: [
      { id: 1, title: "BSBE", latitude: 630, longitude: 100 },
      { id: 2, title: "Tutorial Complex", latitude: 500, longitude: 110 },
      { id: 3, title: "Old Lecture Halls", latitude: 420, longitude: 195 },
      { id: 4, title: "ACMS", latitude: 635, longitude: 200 },
      { id: 5, title: "SCDT", latitude: 540, longitude: 250 },
      { id: 6, title: "New Lecture Halls", latitude: 345, longitude: 120 },
      { id: 7, title: "Western Lab", latitude: 595, longitude: 345 },
      { id: 8, title: "Civil Engg. Lab", latitude: 655, longitude: 460 },
      { id: 9, title: "ACES", latitude: 530, longitude: 455 },
      { id: 10, title: "Faculty Building", latitude: 395, longitude: 440 },
      { id: 11, title: "Core Lab", latitude: 430, longitude: 545 },
      { id: 12, title: "Chemical", latitude: 500, longitude: 700 },
      { id: 13, title: "GATE/JEE", latitude: 642, longitude: 695 },
      { id: 14, title: "SIIC", latitude: 675, longitude: 795 },
      { id: 15, title: "New Core Lab", latitude: 675, longitude: 945 },
      { id: 16, title: "Wind Tunnel", latitude: 555, longitude: 835 },
      { id: 17, title: "Aerospace", latitude: 400, longitude: 855 },
      { id: 18, title: "CESE", latitude: 240, longitude: 865 },
      { id: 19, title: "IME", latitude: 355, longitude: 680 },
      { id: 20, title: "Mechanical", latitude: 300, longitude: 595 },
      { id: 21, title: "Nuclear Physics", latitude: 270, longitude: 650 },
      {
        id: 22,
        title: "P.K. Kelkar Library",
        latitude: 265,
        longitude: 335
      },
      { id: 23, title: "Faculty Lounge", latitude: 216, longitude: 235 },
      { id: 24, title: "Southern Lab", latitude: 160, longitude: 190 },
      { id: 25, title: "Computer Center", latitude: 200, longitude: 540 },
      { id: 26, title: "Computer Science", latitude: 170, longitude: 600 },
      { id: 27, title: "Generator Room", latitude: 120, longitude: 695 },
      { id: 28, title: "AMS", latitude: 150, longitude: 775 },
      { id: 29, title: "Nursery", latitude: 75, longitude: 861 },
      { id: 30, title: "Central Workshop", latitude: 650, longitude: 590 },
      { id: 31, title: "Workshop", latitude: 590, longitude: 590 },
      {
        id: 32,
        title: "Silver Jubilee Landmark",
        latitude: 340,
        longitude: 235
      },
      { id: 33, title: "DOAA Canteen", latitude: 575, longitude: 660 },
      { id: 34, title: "Canteen", latitude: 225, longitude: 610 }
    ],
    centerCampus: [1466, 1262],
    centerAcadsArea: [421, 640]
  };

  handleChange = (event, newValue) => {
    if (newValue !== this.state.selectedView) {
      this.setState({ selectedView: newValue });
      //do not change the if condition
      if (this.state.selectedView !== 0) {
        // this.map.removeLayer(this.acadsAreaOverlay);
        // this.markerGroup.clearLayers();
        // this.map.addLayer(this.campusOverlay);
        // this.map.options.minZoom = -3;
        // this.map.options.maxZoom = 1;
        // this.map.options.zoom = -1;
        // this.map.options.center = this.state.centerCampus;
        this.map.remove();
        this.renderCampusMap();
      } else {
        this.map.remove();
        this.renderAcadsAreaMap();
      }
    }
  };

  handleMarkerClick = e => {
    console.log("marker was clicked");
    console.log(e.target.id);

    this.map.setView(
      e.target.getLatLng(),
      this.state.selectedView === 0 ? -1 : 0
    );
  };

  renderCampusMarkers = () => {
    this.markerGroup = L.layerGroup().addTo(this.map);
    var controlSearch = new L.Control.Search({
      position: "topright",
      layer: this.markerGroup,
      initial: false,
      zoom: 0,
      marker: false
    });

    this.map.addControl(controlSearch);

    this.state.campusLocations.map(location => {
      var marker = L.marker(L.latLng([location.latitude, location.longitude]), {
        title: location.title
      });
      marker.bindPopup(location.title);
      marker.id = location.id;
      marker.on("click", e => this.handleMarkerClick(e));
      marker.addTo(this.markerGroup);
    });
  };

  renderAcadsAreaMarkers = () => {
    this.markerGroup = L.layerGroup().addTo(this.map);
    var controlSearch = new L.Control.Search({
      position: "topright",
      layer: this.markerGroup,
      initial: false,
      zoom: 0,
      marker: false
    });

    this.map.addControl(controlSearch);
    this.state.acadsAreaLocations.map(location => {
      var marker = L.marker(L.latLng([location.latitude, location.longitude]), {
        title: location.title
      });
      marker.bindPopup(location.title);
      marker.id = location.id;
      marker.on("click", e => this.handleMarkerClick(e));
      marker.addTo(this.markerGroup);
    });
  };

  map;
  markerGroup;

  renderCampusMap = () => {
    this.map = L.map("map", {
      center: this.state.centerCampus,
      zoom: -1,
      minZoom: -3,
      maxZoom: 0,
      crs: L.CRS.Simple
    });
    this.map.addLayer(this.campusOverlay);
    this.renderCampusMarkers();
  };

  renderAcadsAreaMap = () => {
    this.map = L.map("map", {
      center: this.state.centerAcadsArea,
      zoom: 0,
      minZoom: -1,
      maxZoom: 1,
      crs: L.CRS.Simple
    });
    this.map.addLayer(this.acadsAreaOverlay);
    this.renderAcadsAreaMarkers();
  };
  componentDidMount() {
    this.renderCampusMap();
    //console.log(this.markerGroup);
  }

  boundsCampus = [[0, 0], [2932, 2524]];
  boundsAcademicArea = [[0, 0], [842, 1280]];

  campusOverlay = L.imageOverlay(campusMap, this.boundsCampus);
  acadsAreaOverlay = L.imageOverlay(academicAreaMap, this.boundsAcademicArea);

  render() {
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
        <div id="map" />
      </React.Fragment>
    );
  }
}

export default Map;
