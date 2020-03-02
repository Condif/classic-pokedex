import * as React from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

import { Pokemon } from "../types";
// import { ErrorBoundary } from "../errorBoundary";

import MainDex from "./main/mainDex";
import InfoDex from "./info/infoDex";

interface Props {}
interface State {
	ID: number;
	currentPokemon: Pokemon;
}
export default class Layout extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			ID: 1,
			currentPokemon: {}
		};
	}

	async componentDidMount() {
		const pokemon = await this.fetchPokeData(this.state.ID);
		this.setState({
			currentPokemon: {
				id: pokemon.id,
				name: pokemon.name,
				sprites: pokemon.sprites.front_default,
				weight: pokemon.weight,
				height: pokemon.height,
				types: pokemon.types
			}
		});
	}

	upState = async () => {
		if (this.state.ID < 807) {
			const newId = this.state.ID + 1;
			const pokemon = await this.fetchPokeData(newId);

			this.setState({
				ID: pokemon.id,
				currentPokemon: {
					id: pokemon.id,
					name: pokemon.name,
					sprites: pokemon.sprites.front_default,
					weight: pokemon.weight,
					height: pokemon.height,
					types: pokemon.types
				}
			});
		}
	};
	downState = async () => {
		if (this.state.ID > 1) {
			const newId = this.state.ID - 1;
			const pokemon = await this.fetchPokeData(newId);

			this.setState({
				ID: pokemon.id,
				currentPokemon: {
					id: pokemon.id,
					name: pokemon.name,
					sprites: pokemon.sprites.front_default,
					weight: pokemon.weight,
					height: pokemon.height,
					types: pokemon.types
				}
			});
		}
	};

	fetchPokeData = async (id: number) => {
		const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
		console.log(res.data);

		return res.data;
	};

	render() {
		console.log(this.state.currentPokemon);
		return (
			<div>
				<div style={buttStyle}>
					<button onClick={this.downState}>DOWN</button>
					<button onClick={this.upState}>UP</button>
				</div>
				<div style={layoutStyle}>
					<MainDex pokemon={this.state.currentPokemon} />
					<InfoDex pokemon={this.state.currentPokemon} />
				</div>
			</div>
		);
	}
}

const layoutStyle: React.CSSProperties = {
	width: "100%",
	height: "100vh",

	display: "flex",
	justifyContent: "center",

	background: "#dc0a2d"
};

const buttStyle: React.CSSProperties = {
	position: "absolute"
};
