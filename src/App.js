import React, { Component } from "react";
// import logo from "./logo.svg";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SideBar from "./components/sidebar/sidebar";
import TopBar from "./components/topbar/topbar";
import Main from "./components/main";
import LoginBox from "./components/login/loginBox";
import { CssBaseline } from "@material-ui/core";
import axios from "axios";
import { API_ROOT } from "./api-config";
import Register from './components/register/registerScreen'

class App extends Component {
	// 'icon' property in pages is the Material Icons icon name.
	constructor() {
		super();
		this.state = {
			pages: [
				{ name: "Feed", icon: "rss_feed" },
				{ name: "Calendar", icon: "calendar_today" },
				// { name: "Map", icon: "map" },
				// { name: "Mess", icon: "restaurant" },
				//{ name: "Search", icon: "search" },
				{ name: "Profile", icon: "account_circle" },
				//{ name: "Admin", icon: "settings" } // Temporary
			],
			activePage: 0,
			sidebarActive: false,
			loginBoxOpen: false,
			details: {},
		};
	}
	IsLoggedIn() {
		axios
			.get(`${API_ROOT}/users/profile/`, { withCredentials: true })
			.then((res) => {
				this.setState({ details: res.data });
			})
			.catch((err) => this.setState({ loginBoxOpen: true }));
	}

	getOwnedtags() {
		axios
			.get(`${API_ROOT}/users/owned/`, { withCredentials: true })
			.then((res) => {
				let newPages = res.data.owned.map((pg) => ({
					name: pg.name,
					icon: "settings",
				}));
				let prevList = this.state.pages.concat(newPages);
				this.setState({ pages: prevList });
			})
			.catch((err) => console.log(err));
	}

	componentDidMount() {
		this.IsLoggedIn();
		this.getOwnedtags();
		if (this.state.details.length === 0) this.setState({ loginBoxOpen: true });
	}

	sidebarToggleHandler = () => {
		this.setState({ sidebarActive: !this.state.sidebarActive });
	};

	loginBoxToggleHandler = () => {
		this.setState({ loginBoxOpen: !this.state.loginBoxOpen });
	};

	switchPage = (pgName) => {
		const newActive = this.state.pages.findIndex((pg) => pg.name === pgName);
		this.setState({ activePage: newActive });
  };
  
  getRegisterScreen=(target, type)=>{

    return <Register
    toggleSidebar={this.sidebarToggleHandler}
    pageHandler={this.switchPage}
    handleToggle={this.sidebarToggleHandler}
    open={this.state.sidebarActive}
		target={target}
		type={type}
  />
  }

	render() {
		return (
			<div
				style={{
					display:
						this.state.activePage === 3 && window.innerWidth < 600
							? ""
							: "flex", //overflow in mess ui mobile view
				}}
			>
				<CssBaseline />
				<Router>
					<Switch>
						<Route path="/register/roll">
							{this.getRegisterScreen('roll')}
						</Route>
            <Route path="/verify/">
							{this.getRegisterScreen('password', 'verify')}
						</Route>
						<Route path="/resetpass/">
							{this.getRegisterScreen('password', 'resetpass')}
						</Route>
						<Route path="/">
							<React.Fragment>
								<TopBar
									toggleSidebar={this.sidebarToggleHandler}
									currentPage={this.state.pages[this.state.activePage]}
									openLogin={this.loginBoxToggleHandler}
									data={this.state.details}
								/>
								<SideBar
									pages={this.state.pages}
									activePage={this.state.activePage}
									pageHandler={this.switchPage}
									handleToggle={this.sidebarToggleHandler}
									open={this.state.sidebarActive}
									openLogin={this.loginBoxToggleHandler}
									data={this.state.details}
								/>
								{/* Container for the main body */}

								<Main page={this.state.pages[this.state.activePage]} />
								<LoginBox
									open={this.state.loginBoxOpen}
									onClose={this.loginBoxToggleHandler}
								/>
							</React.Fragment>
						</Route>
						<Redirect to="/" />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
