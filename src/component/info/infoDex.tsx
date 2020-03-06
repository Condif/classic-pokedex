import * as React from "react";

import InfoDisplay from "./infoDisplay";
import InfoDisplayMoves from "./infoDisplayMoves";
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
				<InfoDisplayMoves pokemon={this.props.pokemon} />
			</div>
		);
	}
}

const infoStyle: React.CSSProperties = {
	width: "45%",
	padding: "2rem",
	border: ".5rem solid #e7e7e7",
	borderLeft:"none"
};
