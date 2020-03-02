import * as React from "react";
import axios from "axios";
import { createBrowserHistory } from 'history'

import { Pokemon } from "../types";
import { ErrorBoundary } from "../errorBoundry";

import MainDex from "./main/mainDex";
import InfoDex from "./info/infoDex";

const history = createBrowserHistory();
// import { resolve } from "dns";
// import { BrowserRouter } from "react-router-dom";
// import Layout from "./component/layout";

interface Props {}
interface State {
	lastPokemon: string
	currentPokemon: Pokemon;
}
export default class Layout extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		const lastUrl = (history.location.pathname.slice(1) !== "") ? history.location.pathname : '/bulbasaur'
		this.updateUrlHistory(lastUrl)
		
		this.state = {
			lastPokemon: lastUrl,
			currentPokemon: {}
		}
	}

	async componentDidMount() {
		const pokemon = await this.fetchPokeData();
		this.setPokemonInState(pokemon)
	}

	upState = async () => {
		const id = this.state.currentPokemon.id
		if (id !== undefined) {			
			if (id < 807) {
				
				const newId = (id+1).toString();
				this.updateUrlHistory(newId)
				const pokemon = await this.fetchPokeData();
				this.setPokemonInState(pokemon)
			}
		}
	};
	downState = async () => {
		const id = this.state.currentPokemon.id
		if (id !== undefined) {
			if (id > 1) {
				const newId = (id-1).toString();
				this.updateUrlHistory(newId)
				const pokemon = await this.fetchPokeData();
				this.setPokemonInState(pokemon)
			}
		}
	};

	fetchPokeData = async () => {	
		const pokemon = history.location.pathname
		const res = await axios.get("https://pokeapi.co/api/v2/pokemon" + pokemon);
		return res.data;
	};

	setPokemonInState(pokemon: any) {
		this.setState({
			lastPokemon: pokemon.id,
			currentPokemon: {
				name: pokemon.name,
				weight: pokemon.weight,
				sprites: pokemon.sprites.front_default,
				id: pokemon.id
			}
		})
	}

	updateUrlHistory(pokemonId: string) {
		history.push(pokemonId)
	}

	render() {
		return (
			<div>
				<ErrorBoundary>
					<button onClick={this.downState}>down</button>
					<button onClick={this.upState}>up</button>
					<img src={this.state.currentPokemon.sprites} alt=""/>
					<div>
						<MainDex />
						<InfoDex />
					</div>
				</ErrorBoundary>
			</div>
		);
	}
}
