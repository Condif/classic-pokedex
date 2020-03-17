import * as React from "react";
import Axios from "axios";
import { createBrowserHistory } from "history";
import {
	Switch,
	Route,
	withRouter,
	RouteComponentProps,
	Redirect
} from "react-router-dom";

import { Pokemon, TeamPokemons } from "../types";

import MainDex from "./dex/main/mainDex";
import InfoDex from "./dex/info/infoDex";
import TeamBuilder from "./team/teamBuilder";
import "./layoutStyle.css";
import { ErrorBoundary } from "../errorBoundary";

const history = createBrowserHistory();

interface Props extends RouteComponentProps {
	isDesktop: boolean;
}
interface State {
	lastPokemon: string;
	currentPokemon: Pokemon;
	myTeam: TeamPokemons;
}
class Layout extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		const URL = history.location.pathname
		console.log(URL);
		console.log(URL.slice(9));
		
		
		const lastUrl = URL.includes('pokedex') && 
						URL.slice(9) !== ""
						? URL.slice(9) : 'bulbasaur'

		this.updateUrlHistory(lastUrl)

		this.state = {
			lastPokemon: lastUrl,
			currentPokemon: {
				height: 0,
				weight: 0
			},
			myTeam: JSON.parse((window as any).localStorage.myTeam || "[]")
		};
	}

	async componentDidMount() {
		this.updateNewPokemon(this.state.lastPokemon);
	}

	upState = async () => {
		const id = this.state.currentPokemon.id;
		if (id !== undefined) {
			if (id < 807) {
				const newId = (id + 1).toString();
				this.updateNewPokemon(newId);
			}
		}
	};
	downState = async () => {
		const id = this.state.currentPokemon.id;
		if (id !== undefined) {
			if (id > 1) {
				const newId = (id - 1).toString();
				this.updateNewPokemon(newId);
			}
		}
	};

	async updateNewPokemon(newId: string) {
		const pokemon = await this.fetchPokeData(newId);
		this.updateUrlHistory(pokemon.name);
		this.setPokemonInState(pokemon);
	}

	handleUpclick = () => {
		this.upState();
	};

	handleDownclick = () => {
		this.downState();
	};

	fetchPokeData = async (newId: string) => {
		const pokemon = newId;
		const notFound = {
			height: 404,
			weight: 404,
			id: 404,
			name: "MissingNo"
		};

		try {
			const res: any = await Axios.get(
				"https://pokeapi.co/api/v2/pokemon/" + pokemon
			);
			return res.data;
		} catch (error) {
			return notFound;
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
				moves: pokemon.moves
			}
		});
	}

	updateUrlHistory(pokemonId: string) {
		
		if (history.location.pathname.includes('pokedex')) {
			// console.log(history.location.pathname);
			history.push(`/pokedex/${pokemonId}`);
		}
	}

	handleSearchClick = (searchResult: string) => {
		this.updateNewPokemon(searchResult);
	};

	handleAddToTeam = (url: string) => {
		if (this.state.myTeam.length < 6) {
			console.log("added : ", url);
			this.setState({
				myTeam: [...this.state.myTeam, url]
			});
		} else {
			console.log("TEAM FULL");
		}
	};

	async componentDidUpdate(prevProps: Props) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			// const pokemon = await this.fetchPokeData(this.state.lastPokemon);
			// this.setPokemonInState(pokemon);
		}

		(window as any).localStorage.myTeam = JSON.stringify(this.state.myTeam);
	}

	handleClearAll = () => {
		this.setState(
			{
				myTeam: []
			}
		);
	};

	render() {
		return (
			<Switch>
				<Route exact path="/">
					<Redirect to={`/pokedex/${this.state.lastPokemon}`} />
				</Route>

				<Route path="/teamPage">
					<ErrorBoundary>
						<div style={layoutWrapperStyle}>
							<TeamBuilder
								teamURLs={this.state.myTeam}
								isDesktop={this.props.isDesktop}
								clearAll={this.handleClearAll}
							/>
						</div>
					</ErrorBoundary>
				</Route>

				<Route path="/pokedex">
					<div className="layoutWrapperStyle">
						{this.props.isDesktop ? (
							<div className="layoutStyle">
								<ErrorBoundary>
									<MainDex
										isDesktop={this.props.isDesktop}
										pokemon={this.state.currentPokemon}
										searchClick={this.handleSearchClick}
										handleUpclick={this.handleUpclick}
										handleDownclick={this.handleDownclick}
										addToTeam={this.handleAddToTeam}
									/>
								</ErrorBoundary>
								<ErrorBoundary>
									<InfoDex
										pokemon={this.state.currentPokemon}
										isDesktop={this.props.isDesktop}
									/>
								</ErrorBoundary>
							</div>
						) : (
							<Route path="/pokedex">
								<div className="layoutStyleMobile">
									<ErrorBoundary>
										<MainDex
											isDesktop={this.props.isDesktop}
											pokemon={this.state.currentPokemon}
											searchClick={this.handleSearchClick}
											handleUpclick={this.handleUpclick}
											handleDownclick={this.handleDownclick}
											addToTeam={this.handleAddToTeam}
										/>
									</ErrorBoundary>
								</div>
								<div style={betweenDivs}></div>
								<div className="layoutStyleMobile">
									<ErrorBoundary>
										<InfoDex
											pokemon={this.state.currentPokemon}
											isDesktop={this.props.isDesktop}
										/>
									</ErrorBoundary>
								</div>
							</Route>
						)}
					</div>
				</Route>
			</Switch>
		);
	}
}
export default withRouter(Layout);

const betweenDivs: React.CSSProperties = {
	height: "1rem",
	width: "80%",
	border: ".2rem solid #123"
};
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