import * as React from "react";

export default class InfoNavbar extends React.Component {
	render() {
		return (
				<div style={navStyle}>
					<p style={{ ...btnStyle, ...bioBtn }}>bio</p>
					<p style={{ ...btnStyle, ...movesBtn }}>moves</p>
					<p style={backBtn}></p>
				</div>
		);
	}
}

const navStyle: React.CSSProperties = {
	width: "90%",
	maxWidth:"33rem",

	display: "flex",
	justifyContent: "center",

	fontSize:"1.5rem",
	fontWeight: 800,
	textTransform:"uppercase"
};

// - - -- -- -- - -

const btnStyle: React.CSSProperties = {
	width: "50%",

	margin: "0 .1rem",
	padding: ".5rem 1rem",

	textAlign: "center",

	background: "#2aa9fe",
	color:"",
	border:".5rem double #dc0a2d",

	cursor: "pointer"
};
const bioBtn: React.CSSProperties = {
	borderRadius: "4rem 0 0 4rem",
	borderRight:".5rem solid #dc0a2d"
};
const movesBtn: React.CSSProperties = {
	borderRadius: "0 4rem 4rem 0",
	borderLeft:".5rem solid #dc0a2d"
};

const backBtn: React.CSSProperties = {
	width: "2rem",
	height: "2rem",

	position: "absolute",
	bottom: ".5rem",
	right: ".5rem",

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
