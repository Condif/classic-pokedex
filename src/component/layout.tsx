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
		this.setPokemonInState(pokemon);
	}

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

	setPokemonInState(pokemon: any) {

		this.setState({
			lastPokemon: pokemon.id,
			currentPokemon: {
				name: pokemon.name,
				id: pokemon.id,
				weight: pokemon.weight,
				height: pokemon.height,
				types: pokemon.types,
				abilities: pokemon.abilities,
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
