import * as React from "react";

import InfoDisplay from "./infoDisplay"
import InfoNavbar from "./infoNavbar"
import { Pokemon } from "../../types";

interface Props {
	pokemon: Pokemon
}

export default class InfoDex extends React.Component<Props> {
	

	render() {
		return (
			<div style={infoStyle}>
				<InfoDisplay pokemon={this.props.pokemon}/>
				<InfoNavbar />
			</div>
		);
	}
}

const infoStyle: React.CSSProperties = {
	width: "40%"
}