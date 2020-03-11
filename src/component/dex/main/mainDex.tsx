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
}

interface State {
	isMainDisplayVisible: boolean;
}

export default class MainDex extends React.Component<Props, State> {

	constructor (props: Props) {
		super(props)
		this.state = {
			isMainDisplayVisible: false
		}
	}
	
	toggleBox = () => {
		this.setState(prevState => ({ isMainDisplayVisible:
		!prevState.isMainDisplayVisible}));
	};

	render() {
		const { isMainDisplayVisible } = this.state;

		return (
			<div className="mainDisplay" /*style={mainStyle}*/>
				<button onClick={this.toggleBox}>Show Maindisplay</button>
				
				<div className={`box ${isMainDisplayVisible ?  "" : "hidden"}`}>
					<MainDisplay
						sprite={this.props.pokemon.sprites}
						name={this.props.pokemon.name}
						weight={this.props.pokemon.weight}
						height={this.props.pokemon.height}
					>
						<SearchBar
						searchClick={this.props.searchClick}
						placeHolder="Search for a pokemon..."
						/>
					</MainDisplay>
					<div style={idNavpadWrapper}>
						<MainID id={this.props.pokemon.id} />
						<MainNavpad />
					</div>
				</div>
			</div>
		);
	}
}

const mainStyle: React.CSSProperties = {
	width: "55%",
	display: "flex",
	flexDirection: "column",
	justifyContent:	"space-between",
	alignItems: "center",

};
const idNavpadWrapper: React.CSSProperties = {
	width: "80%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	flexWrap: "wrap",
};
