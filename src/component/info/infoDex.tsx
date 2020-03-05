import * as React from "react";

import InfoDisplay from "./infoDisplay";
import InfoNavbar from "./infoNavbar";
import { Pokemon } from "../../types";

interface Props {
	pokemon: Pokemon;
}

export default class InfoDex extends React.Component<Props> {
	render() {
		return (
			<div style={infoStyle}>
				<InfoDisplay pokemon={this.props.pokemon} />
				<InfoNavbar />
			</div>
		);
	}
}

const infoStyle: React.CSSProperties = {
	position:"relative",

	width: "45%",
	padding: "2rem",
	border: ".5rem solid #e7e7e7",
	borderLeft:"none",

	display:"flex",
	flexDirection:"column",
	alignItems:"center",
	justifyContent:"space-between"
};
