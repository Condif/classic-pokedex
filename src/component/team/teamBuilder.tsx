import * as React from "react";

import MyTeam from "./myTeam";
import TeamSuper from "./teamSuper";
import TeamWeak from "./teamWeak";
import { myPokemon } from "../../types";
import { Link } from "react-router-dom";

interface Props {
	myPokemon: myPokemon[];
}
interface State {
	myTeam: myPokemon[];
}

export default class TeamBuilder extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			myTeam: this.props.myPokemon
		};
	}

	returnTeamTypes = () => {
		const teamTypes: string[] = [];

		this.state.myTeam.forEach(pokemon => {

			pokemon.types.forEach(type => {
				teamTypes.push(type.type.name)
			});
		});
		return teamTypes;
	};

	render() {
		return (
			<div style={teamBuilderStyle}>
				<TeamSuper teamTypes={this.returnTeamTypes()} />
				<MyTeam myTeam={this.state.myTeam} />
				<TeamWeak teamTypes={this.returnTeamTypes()} />
				<Link to="/">BACK</Link>
			</div>
		);
	}
}

const teamBuilderStyle: React.CSSProperties = {
	width: "100%",
	height: "100%",

	padding: "1rem",

	display: "flex",
	justifyContent: "center",
	alignItems: "flex-start"
};
