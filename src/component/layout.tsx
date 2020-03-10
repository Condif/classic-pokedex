import * as React from "react";
import axios from "axios";
import { createBrowserHistory } from "history";
import { Switch, Route } from "react-router-dom";

import { Pokemon } from "../types";

import MainDex from "./dex/main/mainDex";
import InfoDex from "./dex/info/infoDex";
import TeamBuilder from "./team/teamBuilder";

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
			}
		};
	}

	async componentDidMount() {
		const pokemon = await this.fetchPokeData(this.state.lastPokemon);
		const pokemonBio = await this.fetchPokeDataSpecies(pokemon);
		const pokemonMoves = await this.fetchPokeDataMoves(pokemon);
		this.setPokemonInState(pokemon, pokemonBio, pokemonMoves);
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
		const pokemonBio = await this.fetchPokeDataSpecies(pokemon);
		this.setPokemonInState(pokemon, pokemonBio, null);
	}

	fetchMovesState = async (pokemon: any) => {
		const id = this.state.currentPokemon.id;
		if (id !== undefined) {
			if (id > 1) {
				const newId = "/" + id.toString();
				const pokemon = await this.fetchPokeData(newId);
				const pokemonMoves = await this.fetchPokeDataMoves(pokemon);

				const pokemonBio = await this.fetchPokeDataSpecies(pokemon);
				this.setPokemonInState(pokemon, pokemonBio, pokemonMoves);
			}
		}
	};

	fetchPokeData = async (newId: string) => {
		const pokemon = newId;
		const res = await axios.get("https://pokeapi.co/api/v2/pokemon" + pokemon);
		return res.data;
	};

	fetchPokeDataSpecies = async (pokemon: any) => {
		const pokemonId = "/" + pokemon.id;
		let pokeFlavor: string = "";
		if (pokemon.species) {
			const resSpecies = await axios.get(
				"https://pokeapi.co/api/v2/pokemon-species" + pokemonId
			);
			const bioList = resSpecies.data.flavor_text_entries;
			bioList.some((bioText: any) => {
				if (
					bioText !== undefined &&
					bioText !== null &&
					bioText.language.name === "en"
				) {
					pokeFlavor = bioText.flavor_text;
				}
				return pokeFlavor;
			});
		} else {
			return (pokeFlavor = "");
		}

		return pokeFlavor;
	};

	fetchPokeDataMoves = async (pokemon: any) => {
		let listOfMovesUrls: string[] = [];
		let pokemonMovesList: [] = pokemon.moves;
		let engMoveFlavor: string[] = [];

		for (let i: number = 0; i < pokemonMovesList.length; i++) {
			listOfMovesUrls.push(pokemon.moves[i].move.url);
		}
		for (let i: number = 0; i < 746; i++) {
			for (let index: number = 0; index < listOfMovesUrls.length; index++) {
				if (
					listOfMovesUrls[index].includes(
						"https://pokeapi.co/api/v2/move/" + i + "/"
					)
				) {
					const getPokemonMoves = await axios.get(
						"https://pokeapi.co/api/v2/move/" + i + "/"
					);
					const dataPokemonMoves = getPokemonMoves.data;
					engMoveFlavor.push(
						dataPokemonMoves.flavor_text_entries[2].flavor_text
					);
				}
			}
		}
		return engMoveFlavor;
	};

	setPokemonInState(
		pokemon: any,
		pokemonBio: any,
		pokemonMovesFlavorText: any
	) {
		this.setState({
			lastPokemon: pokemon.id,
			currentPokemon: {
				name: pokemon.name,
				id: pokemon.id,
				sprites: pokemon.sprites.front_default,
				weight: pokemon.weight,
				height: pokemon.height,
				types: pokemon.types,
				abilities: pokemon.abilities,
				pokemonBio: pokemonBio,
				moves: pokemon.moves,
				movesFlavorText: pokemonMovesFlavorText
			}
		});
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
					<div style={layoutWrapperStyle}>
						<TeamBuilder />
					</div>
				</Route>
				<Route path="/">
					<div style={layoutWrapperStyle}>
						{this.props.isDesktop ? (
							<div style={layoutStyle}>
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
									<MainDex
										isDesktop={this.props.isDesktop}
										pokemon={this.state.currentPokemon}
										searchClick={this.handleSearchClick}
									/>
								</Route>
								<Route path="/info">
									<InfoDex pokemon={this.state.currentPokemon} />
								</Route>
							</Switch>
						)}
					</div>
				</Route>
			</Switch>
		);
	}
}

const layoutWrapperStyle: React.CSSProperties = {
	position: "relative",

	width: "100%",
	height: "100vh",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	backgroundColor: "#e7e7e7",
	backgroundImage:
		'url("https://www.transparenttextures.com/patterns/hexellence.png")'
};

const layoutStyle: React.CSSProperties = {
	width: "100%",
	maxWidth: "60rem",
	height: "100vh",
	maxHeight: "40rem",
	display: "flex",
	justifyContent: "center",

	background: "#dc0a2d",
	backgroundImage:
		'url("https://www.transparenttextures.com/patterns/cartographer.png")',
	borderRadius: "1rem",

	boxShadow: "-.5rem .5rem .5rem #123"
};

const buttWrapperStyle: React.CSSProperties = {
	position: "absolute",

	top: 0,
	left: "50%",
	transform: "translatex(-50%)"
};
const buttStyle: React.CSSProperties = {
	padding: ".5rem",
	margin: ".2rem",

	color: "#e7e7e7",
	background: "#333",
	border: ".3rem double #ee8866"
};
