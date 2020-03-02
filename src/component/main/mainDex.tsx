import * as React from "react";

import MainDisplay from "./mainDisplay";
import MainID from "./mainID";
import MainNavpad from "./mainNavpad";
import { Pokemon } from "../../types";

interface Props {
	pokemon: Pokemon;
}

export default class MainDex extends React.Component<Props> {
	render() {
		return (
			<div style={mainStyle}>
				<MainDisplay sprite={this.props.pokemon.sprites} />

				<MainID id={this.props.pokemon.id} />
				<MainNavpad />
			</div>
		);
	}
}

const mainStyle: React.CSSProperties = {
	width: "55%",

	display: "flex",
	justifyContent: "space-evenly",
	alignItems: "center",
    flexWrap: "wrap",
    
    border: ".5rem solid #e7e7e7 "
};
