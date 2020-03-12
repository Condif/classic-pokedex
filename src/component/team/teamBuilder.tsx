import * as React from "react";

import MyTeam from "./myTeam";
import TeamSuper from "./teamSuper";
import TeamWeak from "./teamWeak";
import { TeamPokemons } from "../../types";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {
	myTeam: TeamPokemons[];
	removeLast: () => void;
	clearAll: () => void;
}
interface State {
	myTeam: TeamPokemons[];
}

class TeamBuilder extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			myTeam: []
		};
	}

	componentDidMount() {
		this.setState(
			{
				myTeam: this.props.myTeam
			},
			() => console.log("state changed on mount - teambuilder")
		);
	}
	componentDidUpdate() {
		if (this.state.myTeam != this.props.myTeam) {
			this.setState(
				{
					myTeam: this.props.myTeam
				},
				() => console.log("state changed on mount - teambuilder")
			);
		}
	}

	returnTeamTypes = () => {
		const teamTypes: string[] = [];

		this.state.myTeam.forEach(pokemon => {
			pokemon.types.forEach(type => {
				teamTypes.push(type.type.name);
			});
		});
		return teamTypes;
	};

	render() {
		console.log("teambuilder - props", this.props.myTeam);
		console.log("teambuilder - state", this.state.myTeam);
		return (
			<div style={teamBuilderStyle}>
				<TeamSuper teamTypes={this.returnTeamTypes()} />
				<MyTeam myTeam={this.state.myTeam} />
				<TeamWeak teamTypes={this.returnTeamTypes()} />
				<Link to="/">BACK</Link>

				<button onClick={this.props.removeLast}>REMOVE LAST</button>
				<button onClick={this.props.clearAll}>CLEAR ALL</button>
			</div>
		);
	}
}

export default withRouter(TeamBuilder);

const teamBuilderStyle: React.CSSProperties = {
	width: "100%",
	height: "100%",

	padding: "1rem",

	display: "flex",
	justifyContent: "center",
	alignItems: "flex-start"
};
