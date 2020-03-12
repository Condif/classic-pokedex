import * as React from "react";
import Axios from "axios";

import MyTeam from "./myTeam";
import TeamSuper from "./teamSuper";
import TeamWeak from "./teamWeak";
import { TeamPokemons, Pokemon } from "../../types";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {
	teamURLs: TeamPokemons;
	removeLast: () => void;
	clearAll: () => void;
}
interface State {
	myTeam: any[];
	teamTypes: any[];
}

class TeamBuilder extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			myTeam: [],
			teamTypes: []
		};
	}

	componentDidMount() {
		this.setTeam();
	}
	componentDidUpdate(prevProps: Props) {
		console.log("teamBuilder UPDATed");
		
		// console.log(prevProps.teamURLs);
		// console.log(this.props.teamURLs);
		
		if (prevProps.teamURLs === this.props.teamURLs) {
			console.log("no change");
			
			this.setTeam();
		} else if(prevProps.teamURLs !== this.props.teamURLs) {
			console.log("change occured");
			
		}
	}

	setTeam = () => {
		let index: number = 0;

		this.props.teamURLs.forEach(async member => {
			const memberRes = await Axios.get(member);
			this.setState(
				{
					myTeam: [...this.state.myTeam, memberRes.data]
				},
				() => {
					index++;
					if (index === this.props.teamURLs.length) {
						this.setTeamTypes();
					}
				}
			);
		});
	};

	setTeamTypes = () => {
		let teamTypes: any = [];

		this.state.myTeam.forEach(member => {
			member.types.forEach((type: any) => {
				teamTypes.push(type.type);

				this.setState({
					teamTypes: teamTypes
				});
			});
		});
	};

	logState = () => {
		console.log("my-team", this.state.myTeam);
		console.log("my-types", this.state.teamTypes);
	};

	render() {
		return (
			<div style={teamBuilderStyle}>
				<TeamSuper teamTypes={this.state.teamTypes} />
				<MyTeam myTeam={this.state.myTeam} />
				<TeamWeak teamTypes={this.state.teamTypes} />

				<div style={btnWrapper}>
					<Link to="/">BACK</Link>
					<button onClick={this.props.removeLast}>REMOVE LAST</button>
					<button onClick={this.props.clearAll}>CLEAR ALL</button>
					<button onClick={this.logState}>log State</button>
				</div>
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

const btnWrapper: React.CSSProperties = {
	position: "absolute",
	bottom: 0,
	left: "50%",
	transform: "translateX(-50%)",

	padding: ".5rem",

	border: ".2rem solid #333",
	background: "#e7e7e7"
};
