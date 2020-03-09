import * as React from "react";

import MainDisplay from "./mainDisplay";
import MainID from "./mainID";
import MainNavpad from "./mainNavpad";
import { Pokemon } from "../../../types";
import SearchBar from "./searchBar";

interface Props {
	pokemon: Pokemon;
	searchClick: (searchReasult: string) => void;
}

export default class MainDex extends React.Component<Props> {
	render() {
		return (
			<div style={mainStyle}>
				<MainDisplay
					sprite={this.props.pokemon.sprites}
					name={this.props.pokemon.name}
					weight={this.props.pokemon.weight}
					height={this.props.pokemon.height}
				>
					<SearchBar
					searchClick={this.props.searchClick}
					placeHolder="Search for a pokemon..."
					/>
				</MainDisplay>

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
};