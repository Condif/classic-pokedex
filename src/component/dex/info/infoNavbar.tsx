import * as React from "react";
// import { NavPage } from "../../../types";

interface Props {
	navigateToBio: () => void
	navigateToMoves: () => void
	isDesktop: boolean;
}

export default class InfoNavbar extends React.Component<Props> {
	render() {
		return (
			<div style={navStyle}>
				<p
					style={{ ...btnStyle, ...bioBtn }}
					onClick={this.props.navigateToBio}>
					bio
				</p>
				<p
					style={{ ...btnStyle, ...movesBtn }}
					onClick={this.props.navigateToMoves}>
					moves
				</p>
			</div>
		);
	}
}

const navStyle: React.CSSProperties = {
	position: "absolute",
	bottom: "1.5rem",
	width: "90%",
	maxWidth: "33rem",

	display: "flex",
	justifyContent: "center",

	fontSize: "1.5rem",
	fontWeight: 800,
	textTransform: "uppercase"
};


const btnStyle: React.CSSProperties = {
	width: "50%",

	margin: "0 .1rem",
	padding: ".75rem",

	textAlign: "center",
	fontSize: "125%",

	background: "#2aa9fe",
	color: "",
	boxShadow: "-.1rem .1rem .1rem #123",

	cursor: "pointer"
};
const bioBtn: React.CSSProperties = {
	borderRadius: "4rem 0 0 4rem"
};
const movesBtn: React.CSSProperties = {
	borderRadius: "0 4rem 4rem 0"
};
