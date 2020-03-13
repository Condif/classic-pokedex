import * as React from "react";

import MainDisplay from "./mainDisplay";
import MainID from "./mainID";
import MainNavpad from "./mainNavpad";
import { Pokemon } from "../../../types";
import SearchBar from "./searchBar";
import '../../mainDex.css'

interface Props {
	pokemon: Pokemon;
	searchClick: (searchReasult: string) => void;
	isDesktop: boolean;
	handleUpclick: () => void;
}

export default class MainDex extends React.Component<Props> {
	
	render() {
		
		return (
			<div className={`mainDisplay ${this.props.isDesktop ? "" : "mobile"}`}>
				{/*Klassen får  ett namn beroende på om
				boolean är true eller false, är den true heter classen mainDisplay, är
				den false heter klassen mainDisplay.mobile */ }

					<MainDisplay
						isDesktop={this.props.isDesktop}
						sprite={this.props.pokemon.sprites}
						name={this.props.pokemon.name}
						weight={this.props.pokemon.weight}
						height={this.props.pokemon.height}
					>
						<SearchBar
						isDesktop={this.props.isDesktop}
						searchClick={this.props.searchClick}
						placeHolder="Search for a pokemon..."
						/>
					</MainDisplay>
					<div className={`idNavpadWrapper ${this.props.isDesktop ? "" : "mobile"}`}>
						<MainID id={this.props.pokemon.id} />
						<MainNavpad handleUpclick={this.props.handleUpclick} />
					</div>
				
			</div>
		);
	}
}
