import * as React from "react";
import axios from "axios";

import { ErrorBoundary } from "./errorBoundry";

// import { resolve } from "dns";
// import { BrowserRouter } from "react-router-dom";
// import Layout from "./component/layout";

interface Props {}
interface State {
	ID: number;
	currentPokemon: {} | [];
}
export default class App extends React.Component<Props, State> {
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
			currentPokemon: pokemon.name
		});
	}

	upState = async () => {
		if (this.state.ID < 807) {
			const newId = this.state.ID + 1;
			const pokemon = await this.fetchPokeData(newId);
			this.setState({
				ID: newId,
				currentPokemon: pokemon.name
			});
		}
	};
	downState = async () => {
		if (this.state.ID > 1) {
			const newId = this.state.ID - 1;
			const pokemon = await this.fetchPokeData(newId);
			this.setState({
				ID: newId,
				currentPokemon: pokemon.name
			});
		}
	};

	// triggerAfterAWhile(): Promise<boolean> {
	//   return new Promise((resolve) => {
	//     setTimeout(() => resolve(true), 3000)
	//   })
	// }

	fetchPokeData = async (id: number) => {
		const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
		return res.data;
	};

	render() {
		console.log(this.state.currentPokemon);
		return (
			<div>
				<button onClick={this.downState}>Down</button>
				<button onClick={this.upState}>up</button>

				<ErrorBoundary>
					<h1>{this.state.currentPokemon}</h1>
				</ErrorBoundary>
			</div>
		);
	}
}
