import React from "react";
import {
	Modal,
	CardHeader,
	Avatar,
	CardContent,
	makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	paper: {
		flex: 1,
		position: "absolute",
		margin: "auto",
		width: 300,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2),
		outline: "none",
		textAlign: "center",
	},
}));

const CustomModal = (props) => {
	const classes = useStyles();
	return (
		<Modal
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
			open={props.modal.isOpen}
			onClose={() =>
				props.setModal((e) => {
					return { ...e, isOpen: false };
				})
			}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div className={classes.paper}>
				<CardHeader
					avatar={<Avatar src="/avatar.png" />}
					title={props.modal.title}
					subheader=""
				/>
				<CardContent style={{ paddingTop: 0 }}>
					<div>{props.modal.message}</div>
				</CardContent>
			</div>
		</Modal>
	);
};

export default CustomModal;
