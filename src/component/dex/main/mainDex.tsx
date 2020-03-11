import * as React from "react";

import MainDisplay from "./mainDisplay";
import MainID from "./mainID";
import MainNavpad from "./mainNavpad";
import { Pokemon } from "../../../types";
import SearchBar from "./searchBar";

interface Props {
	pokemon: Pokemon;
	searchClick: (searchReasult: string) => void;
	addToTeam: (name: any, moves: any, sprite: any, type: any) => void;
	idUp: () => void;
	idDown: () => void;
}

export default class MainDex extends React.Component<Props> {
	onClick = () => {
		this.props.addToTeam(
			this.props.pokemon.name,
			["1","2","3","4"],
			this.props.pokemon.sprites,
			this.props.pokemon.types
		);
	};

	render() {
		return (
			<div style={mainStyle}>
				<button onClick={this.onClick} style={addStyle}>
					+
				</button>
				<MainDisplay
					sprite={this.props.pokemon.sprites}
					name={this.props.pokemon.name}
					weight={this.props.pokemon.weight}
					height={this.props.pokemon.height}>
					<SearchBar
						searchClick={this.props.searchClick}
						placeHolder="Search for a pokemon..."
					/>
				</MainDisplay>
				<div style={idNavpadWrapper}>
					<MainID id={this.props.pokemon.id} />
					<MainNavpad />
				</div>
			</div>
		);
	}
}

const mainStyle: React.CSSProperties = {
	width: "55%",
	display: "flex",
	flexDirection: "column",
	justifyContent:	"space-between",
	alignItems: "center",

};
const idNavpadWrapper: React.CSSProperties = {
	width: "80%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	flexWrap: "wrap"
};

const addStyle: React.CSSProperties = {
	position: "absolute",
	right: 0,
	bottom: 0,

	height: "2rem",
	width: "2rem",

	padding: ".5rem",
	margin: "1rem",

	textAlign: "center"
};
