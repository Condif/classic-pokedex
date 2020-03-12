import * as React from "react";
import axios from "axios";
import { createBrowserHistory } from "history";
import { Switch, Route } from "react-router-dom";

import { Pokemon } from "../types";

import MainDex from "./dex/main/mainDex";
import InfoDex from "./dex/info/infoDex";
import TeamBuilder from "./team/teamBuilder";
import "./layoutStyle.css"

const history = createBrowserHistory();
interface Props {
	isDesktop: boolean;
}
interface State {
	lastPokemon: string;
	currentPokemon: Pokemon;
}

export default class Layout extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		const lastUrl =
			history.location.pathname.slice(1) !== ""
				? history.location.pathname
				: "/bulbasaur";
		this.updateUrlHistory(lastUrl);

		this.state = {
			lastPokemon: lastUrl,
			currentPokemon: {
				height: 0,
				weight: 0
			},
		};
	}

	async componentDidMount() {
		this.updateNewPokemon(this.state.lastPokemon)
	}

	upState = async () => {
		const id = this.state.currentPokemon.id;
		if (id !== undefined) {
			if (id < 807) {
				const newId = "/" + (id + 1).toString();
				this.updateNewPokemon(newId);
			}
		}
	};
	downState = async () => {
		const id = this.state.currentPokemon.id;
		if (id !== undefined) {
			if (id > 1) {
				const newId = "/" + (id - 1).toString();
				this.updateNewPokemon(newId);
			}
		}
	};

	async updateNewPokemon(newId: string) {
		const pokemon = await this.fetchPokeData(newId);		
		this.updateUrlHistory(pokemon.name);
		// const pokemonBio = await this.fetchPokeDataSpecies(pokemon);
		this.setPokemonInState(pokemon, /* pokemonBio, null*/);
	}

	// fetchMovesState = async (pokemon: any) => {
	// 	const id = this.state.currentPokemon.id;
	// 	if (id !== undefined) {
	// 		if (id > 1) {
	// 			const newId = "/" + id.toString();
	// 			const pokemon = await this.fetchPokeData(newId);
	// 			// const pokemonMoves = await this.fetchPokeDataMoves(pokemon);

	// 			// const pokemonBio = await this.fetchPokeDataSpecies(pokemon);
	// 			this.setPokemonInState(pokemon, /* pokemonBio, pokemonMoves */);
	// 		}
	// 	}
	// };

	fetchPokeData = async (newId: string) => {
		const pokemon = newId;
		const notFound = {
			height: 404,
			weight: 404,
			id: 404,
			name: 'MissingNo',
		}
		
		try {
			const res:any = await axios.get("https://pokeapi.co/api/v2/pokemon" + pokemon)
			return res.data;
		} catch (error) {
			return notFound
		}
	};

	// fetchPokeDataSpecies = async (pokemon: any) => {
		
	// 	const pokemonId = "/" + pokemon.id;
	// 	let pokeFlavor: string = "";
	// 	if (pokemon.species) {
	// 		const resSpecies = await axios.get(
	// 			"https://pokeapi.co/api/v2/pokemon-species" + pokemonId
	// 		);
	// 		const bioList = resSpecies.data.flavor_text_entries;
	// 		bioList.some((bioText: any) => {
	// 			if (
	// 				bioText !== undefined &&
	// 				bioText !== null &&
	// 				bioText.language.name === "en"
	// 			) {
	// 				pokeFlavor = bioText.flavor_text;
	// 			}
	// 			return pokeFlavor;
	// 		});
	// 	} else {
	// 		return (pokeFlavor = "");
	// 	}

	// 	return pokeFlavor;
	// };

	// fetchPokeDataMoves = async (pokemon: any) => {
	// 	let listOfMovesUrls: string[] = [];
	// 	let pokemonMovesList: [] = pokemon.moves;
	// 	let engMoveFlavor: string[] = [];

	// 	for (let i: number = 0; i < pokemonMovesList.length; i++) {
	// 		listOfMovesUrls.push(pokemon.moves[i].move.url);
	// 	}
	// 	for (let i: number = 0; i < 746; i++) {
	// 		for (let index: number = 0; index < listOfMovesUrls.length; index++) {
	// 			if (
	// 				listOfMovesUrls[index].includes(
	// 					"https://pokeapi.co/api/v2/move/" + i + "/"
	// 				)
	// 			) {
	// 				const getPokemonMoves = await axios.get(
	// 					"https://pokeapi.co/api/v2/move/" + i + "/"
	// 				);
	// 				const dataPokemonMoves = getPokemonMoves.data;
	// 				engMoveFlavor.push(
	// 					dataPokemonMoves.flavor_text_entries[2].flavor_text
	// 				);
	// 			}
	// 		}
	// 	}
	// 	return engMoveFlavor;
	// };

	setPokemonInState(
		pokemon: any,
		// pokemonBio: any,
		// pokemonMovesFlavorText: any
	) {
		console.log(pokemon);
		
		this.setState({
			lastPokemon: pokemon.id,
			currentPokemon: {
				name: pokemon.name,
				id: pokemon.id,
				// sprites: pokemon.sprites.front_default,
				weight: pokemon.weight,
				height: pokemon.height,
				types: pokemon.types,
				abilities: pokemon.abilities,
				// pokemonBio: pokemonBio,
				// moves: pokemon.moves,
				// movesFlavorText: pokemonMovesFlavorText
			}
		}, /*() => console.log(this.state.currentPokemon)*/);
	}

	updateUrlHistory(pokemonId: string) {
		history.push(pokemonId);
	}

	handleSearchClick = (searchResult: string) => {
		this.updateNewPokemon(searchResult);
	};

	render() {
		return (
			<Switch>
				<Route path="/hej">
				<div className="layoutWrapperStyle">
						<TeamBuilder />
					</div>
				</Route>
				<Route path="/">
					<div className="layoutWrapperStyle">
						{this.props.isDesktop ? (
							<div className="layoutStyle">
								<MainDex
									isDesktop={this.props.isDesktop}
									pokemon={this.state.currentPokemon}
									searchClick={this.handleSearchClick}
								/>
								<InfoDex pokemon={this.state.currentPokemon} />
							</div>
						) : (
							<Switch>
								<Route path="/">
									<div className="layoutStyleMobile">
										<MainDex
											isDesktop={this.props.isDesktop}
											pokemon={this.state.currentPokemon}
											searchClick={this.handleSearchClick}
										/>
									</div>
								</Route>
								{/*Uppdaterar pokemon efter url vilket vilket gör att sidan kraschar med /info, kan använda link */}
								<Route path="/info">
									<div className="layoutStyleMobile">
										<InfoDex pokemon={this.state.currentPokemon} />
									</div>
								</Route>
							</Switch>
						)}
					</div>
				</Route>
			</Switch>
		);
	}
}


// const buttWrapperStyle: React.CSSProperties = {
// 	position: "absolute",

// 	top: 0,
// 	left: "50%",
// 	transform: "translatex(-50%)"
// };
// const buttStyle: React.CSSProperties = {
// 	padding: ".5rem",
// 	margin: ".2rem",

// 	color: "#e7e7e7",
// 	background: "#333",
// 	border: ".3rem double #ee8866"
// };
