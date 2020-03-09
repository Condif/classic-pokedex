import * as React from "react";
import axios from "axios";
import SearchResults from "./searchResults";

interface PokeData {
	id: number;
	name: string;
	url: string;
}

interface Pokebundle {
	pokeName: Array<PokeData>;
	pokeID: Array<PokeData>;
}

interface Props {
	placeHolder: string;
	searchClick: (searchResult: string) => void;
}

interface State {
	showList: boolean;
	showPokemon: { pokeName: any; pokeID: any };
	pokemonList: Array<PokeData>;
}

export default class SearchBar extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			showList: false,
			showPokemon: { pokeName: [], pokeID: [] },
			pokemonList: [
				{
					id: 0,
					name: "",
					url: ""
				}
			]
		};
	}

	async componentDidMount() {
		const pokemon = await this.fetchPokeData();
		this.setPokemonInState(pokemon);
	}

	setPokemonInState(pokemon: Array<any>) {
		const generatePokemon = pokemon.map((val, index) => {
			index++;
			return {
				id: index,
				name: val.name,
				url: val.url
			};
		});
		this.setState({
			pokemonList: generatePokemon
		});
	}

	fetchPokeData = async () => {
		const result = axios.get(
			"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807"
		);
		return (await result).data.results;
	};

	handleOnChange = async (e: React.FormEvent) => {
		let target = e.target as any;
		if (target.value === "") {
			this.setState({
				showList: false
			});
		} else {
			const validPokemon = await this.checkMatchingPokemonNames(target.value);
			const remappedPokemon = await this.remapPokemon(validPokemon);
			console.log(remappedPokemon);

			this.setState({
				showList: true,
				showPokemon: remappedPokemon
			});
		}
		console.log(this.state.showPokemon);
	};

	async checkMatchingPokemonNames(value: string) {
		let pokeName: Array<PokeData> = [];
		let pokeID: Array<PokeData> = [];
		this.state.pokemonList.forEach(pokemon => {
			if (pokemon.name.includes(value)) {
				pokeName.push(pokemon);
			} else if (pokemon.id.toString() === value) {
				pokeID.push(pokemon);
			}
		});
		return { pokeName, pokeID };
	}

	async remapPokemon(pokemon: Pokebundle) {
		const { pokeName: name, pokeID: id } = pokemon;
		const pokeName = name.map(val => (
			<li key={val.name} id={val.name} onClick={this.handlePokemonChoice}>
				{" "}
				ID: {val.id} {val.name}
			</li>
		));
		const pokeID = id.map(val => (
			<li key={val.name} id={val.name} onClick={this.handlePokemonChoice}>
				{" "}
				ID: {val.id} {val.name}
			</li>
		));
		return { pokeName, pokeID };
	}

	handlePokemonChoice = (event: any) => {
		const clickedPokemon = event.target.getAttribute("id");
		this.props.searchClick("/" + clickedPokemon);
	};

	render() {
		return (
			<div>
				<input
					type="text"
					placeholder={this.props.placeHolder}
					onChange={this.handleOnChange}
				/>
				{this.state.showList ? (
					<div>
						{this.state.showPokemon.pokeName.length === 0 &&
						this.state.showPokemon.pokeID.length === 0 ? (
							<h1>No results</h1>
						) : null}
						<div>
							{this.state.showPokemon.pokeName.length > 0 ? (
								<SearchResults
									title="Name: "
									value={this.state.showPokemon.pokeName.length}>
									{this.state.showPokemon.pokeName}
								</SearchResults>
							) : null}
							{this.state.showPokemon.pokeID.length > 0 ? (
								<SearchResults title="ID: ">
									{this.state.showPokemon.pokeID}
								</SearchResults>
							) : null}
						</div>
					</div>
				) : null}
			</div>
		);
	}
}
