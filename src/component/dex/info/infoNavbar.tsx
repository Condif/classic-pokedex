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
				{ (!this.props.isDesktop &&
				<p style={backBtn}></p>) }
			</div>
		);
	}
}

const navStyle: React.CSSProperties = {
	position: "absolute",
	bottom: "1.5rem",
	width: "90%",
	maxWidth: "33rem",

	// margin: "0 2rem 2rem 2rem",

	display: "flex",
	justifyContent: "center",

	fontSize: "1.5rem",
	fontWeight: 800,
	textTransform: "uppercase"
};

// - - -- -- -- - -

const btnStyle: React.CSSProperties = {
	width: "50%",

	margin: "0 .1rem",
	padding: ".75rem",

	textAlign: "center",
	fontSize: "125%",

	background: "#2aa9fe",
	color: "",
	// border:".5rem solid #dc0a2d",

	cursor: "pointer"
};
const bioBtn: React.CSSProperties = {
	borderRadius: "4rem 0 0 4rem"
	// borderRight:".5rem solid #dc0a2d"
};
const movesBtn: React.CSSProperties = {
	borderRadius: "0 4rem 4rem 0"
	// borderLeft:".5rem solid #dc0a2d"
};

const backBtn: React.CSSProperties = {
	width: "2rem",
	height: "2rem",

	position: "absolute",
	bottom: ".5rem",
	right: "0",

	color: "#aa5522",
	fontSize: ".7em",
	textTransform: "uppercase",

	background: "#ee7755",
	border: ".5rem double #aa5522",
	borderRadius: "50%",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	cursor: "pointer"
};
