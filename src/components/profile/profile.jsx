import React, { useEffect, useState } from "react";
import { Paper, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AcadSection from "./acads/acads";
import UserInfo from "./userInfo";
import axios from "axios";
import { API_ROOT } from "../../api-config";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		overflow: "hidden",
	},
	paper: {
		maxWidth: 210,
		margin: `${theme.spacing(1)}px auto`,
		padding: theme.spacing(2),
	},
	bigAvatar: {
		margin: 20,
		width: 100,
		height: 100,
	},
	updateButton: {
		margin: 20,
		width: 100,
		height: 40,
	},
	input: {
		display: "none",
	},
}));

export default function Profile() {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const changePage = (e, newPg) => setPage(newPg);
	const [details, setDetails] = useState({ acads: [] });

	useEffect(() => {
		axios
			.get(`${API_ROOT}/users/profile/`, { withCredentials: true })
			.then((res) => setDetails(res.data))
			.catch((err) => console.log(err));
	}, []); //Pass acads array to acads portion and rest to profile section

	const getCourses = () => {
		axios
			.get(`${API_ROOT}/users/profile/`, { withCredentials: true })
			.then((res) => setDetails(res.data))
			.catch((err) => console.log(err));
	};

	const addCourse = (courseCode) => {
		if (details.acads.find((course) => course.code === courseCode)) {
			return true;
		} else {
			axios({
				method: "put",
				url: `${API_ROOT}/users/acads/`,
				data: { code: courseCode },
				withCredentials: true,
			})
				.then(() => getCourses())
				.catch((err) => console.log(err));

			// const newDetails = { ...details };
			// newDetails.acads.push({ code: courseCode, name: "Something" });
			// setDetails(newDetails);

			// axios
			//   .get(`${API_ROOT}/users/acads`, { withCredentials: true })
			//   .then(res => setDetails(res.data))
			//   .catch(err => console.log(err));

			return false;
		}
	};

	const deleteCourse = (courseCode) => {
		// Delete course here
		axios({
			method: "delete",
			url: `${API_ROOT}/users/course/delete/`,
			data: { code: courseCode },
			withCredentials: true,
		})
			.then(getCourses)
			.catch((err) => console.log(err));
	};

	const renderPage = (page) => {
		if (page === 0) return <UserInfo details={details} />;
		else
			return (
				<AcadSection
					courses={details.acads}
					addCourse={addCourse}
					deleteCourse={deleteCourse}
				/>
			);
	};

	return (
		<div className={classes.root}>
			<Paper square>
				<Tabs
					value={page}
					indicatorColor="primary"
					textColor="primary"
					onChange={changePage}
				>
					<Tab label="Profile" />
					<Tab label="Academics" />
				</Tabs>
			</Paper>
			{details.roll && renderPage(page)}
		</div>
	);
}
