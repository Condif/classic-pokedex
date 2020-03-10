import * as React from "react";
import axios from "axios";
import { createBrowserHistory } from "history";
import { Switch, Route } from "react-router-dom";

import { Pokemon } from "../types";

import MainDex from "./dex/main/mainDex";
import InfoDex from "./dex/info/infoDex";

const history = createBrowserHistory();

interface Props {}
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
		this.setPokemonInState(pokemon, pokemonBio);
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
		this.setPokemonInState(pokemon, pokemonBio)
	}

	fetchMovesState = async () => {
		const id = this.state.currentPokemon.id;
		if (id !== undefined) {
			if (id > 1) {
				const newId = "/" + id.toString();
				const pokemon = await this.fetchPokeData(newId);
				const pokemonBio = await this.fetchPokeDataSpecies(pokemon);
				this.setPokemonInState(pokemon, pokemonBio);

			}
		}
	};

	fetchPokeData = async (newId: string) => {
		const pokemon = newId;
		const res = await axios.get("https://pokeapi.co/api/v2/pokemon" + pokemon);
		return res.data;
	};

	fetchPokeDataSpecies = async (pokemon: any) => {
        const pokemonId = "/" + pokemon.id
        let pokeFlavor: string = '';
        if (pokemon.species) {
            const resSpecies = await axios.get("https://pokeapi.co/api/v2/pokemon-species" + pokemonId);
            const bioList = resSpecies.data.flavor_text_entries
            bioList.some((bioText: any) => {
                if (bioText !== undefined && bioText !== null && bioText.language.name === 'en') {
                    pokeFlavor = bioText.flavor_text    
                }
                return pokeFlavor;
            });
        } else {
            return pokeFlavor = ''
        }
        
        return pokeFlavor;
    };

	setPokemonInState(
		pokemon: any,
		pokemonBio: any,
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
				<Route exact path="/hej">
					{/* <TeamBuilder /> */}
				</Route>
				<Route path="/">
					<div style={layoutWrapperStyle}>
						<div style={buttWrapperStyle}>
							<button style={buttStyle} onClick={this.downState}>
								DOWN
							</button>
							<button style={buttStyle} onClick={this.upState}>
								UP
							</button>
						</div>
						<div style={layoutStyle}>
							<MainDex
								pokemon={this.state.currentPokemon}
								searchClick={this.handleSearchClick}
							/>
							<InfoDex pokemon={this.state.currentPokemon} />
						</div>
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
	maxWidth: "70rem",
	height: "100vh",
	maxHeight: "50rem",

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
