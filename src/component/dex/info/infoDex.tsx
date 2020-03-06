import * as React from "react";

import InfoDisplay from "./infoDisplay";
import InfoNavbar from "./infoNavbar";
import InfoDisplayMoves from "./infoDisplayMoves";
import { Pokemon } from "../../../types";

interface Props {
	pokemon: Pokemon;
}

export default class InfoDex extends React.Component<Props> {
	render() {
		return (
			<div style={infoStyle}>
				<div style={cutout_1}></div>
				<div style={cutout_2}></div>

				<InfoDisplay pokemon={this.props.pokemon} />
				<InfoNavbar />

				<InfoDisplayMoves pokemon={this.props.pokemon} />
			</div>
		);
	}
}

const infoStyle: React.CSSProperties = {
	position: "relative",

	width: "45%",
	borderLeft: ".5rem solid #e7e7e7",
	borderRadius: "2%",

	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-around"
};
const cutout_1: React.CSSProperties = {
	position: "absolute",
	top: 0,
	right: 0,

	width: "45%",
	height: "4rem",

	background: "#e7e7e7",
	backgroundImage:
		"url(https://www.transparenttextures.com/patterns/hexellence.png)"
	// border:"1px solid red",
};
const cutout_2: React.CSSProperties = {
	position: "absolute",
	top: 0,
	right: "45%",

	width: "10rem",
	height: "4rem",

	background: "#e7e7e7",
	backgroundImage:
		"url(https://www.transparenttextures.com/patterns/hexellence.png)",
	// border:"1px solid red",

	transformOrigin: "100% 100%",
	transform: "rotate(45deg)"
};
