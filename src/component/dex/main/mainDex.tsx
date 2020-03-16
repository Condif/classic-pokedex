import * as React from "react";

import MainDisplay from "./mainDisplay";
import MainID from "./mainID";
import MainNavpad from "./mainNavpad";
import { Pokemon } from "../../../types";
import SearchBar from "./searchBar";
import addPokemon from "../../../assets/addPokemon.png";
import "../../mainDex.css";

interface Props {
	pokemon: Pokemon;
	isDesktop: boolean;

	searchClick: (searchReasult: string) => void;
	handleUpclick: () => void;
	handleDownclick: () => void;
	addToTeam: (url: string) => void;
}

export default class MainDex extends React.Component<Props> {
	onClick = () => {
		this.props.addToTeam(
			"https://pokeapi.co/api/v2/pokemon/" + this.props.pokemon.name
		);
	};

	render() {
		return (
			<div className={`mainDisplay ${this.props.isDesktop ? "" : "mobile"}`}>
				{/*Klassen får  ett namn beroende på om
				boolean är true eller false, är den true heter classen mainDisplay, är
				den false heter klassen mainDisplay.mobile */}

				<MainDisplay
					isDesktop={this.props.isDesktop}
					sprite={this.props.pokemon.sprites}
					name={this.props.pokemon.name}
					weight={this.props.pokemon.weight}
					height={this.props.pokemon.height}>
					<button style={addPokemonButton} onClick={this.onClick}>
						<img src={addPokemon} alt="ADD POKEMON" style={addPokemonStyle} />
					</button>
					<SearchBar
						isDesktop={this.props.isDesktop}
						searchClick={this.props.searchClick}
						placeHolder="Search for a pokemon..."
					/>
				</MainDisplay>
				<div
					className={`idNavpadWrapper ${this.props.isDesktop ? "" : "mobile"}`}>
					<MainID id={this.props.pokemon.id} />
					<MainNavpad
						handleUpclick={this.props.handleUpclick}
						handleDownclick={this.props.handleDownclick}
					/>
				</div>
			</div>
		);
	}
}
const addPokemonButton: React.CSSProperties = {
	position: "absolute",
	bottom: ".5rem",
	right: ".5rem",
	zIndex: 1000,

	border:"none",
	background:"none"
};

const addPokemonStyle: React.CSSProperties = {
	width: "2rem"
};
