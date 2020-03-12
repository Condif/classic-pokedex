import * as React from "react";
import Axios from "axios";

import MyTeam from "./myTeam";
import TeamSuper from "./teamSuper";
import TeamWeak from "./teamWeak";
import { TeamPokemons, Pokemon } from "../../types";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {
	teamURLs: TeamPokemons;
	isDesktop: boolean;
}
interface State {
	teamURLs: TeamPokemons;
	myTeam: any[];
	teamTypes: any[];
}

class TeamBuilder extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			teamURLs: this.props.teamURLs,
			myTeam: [],
			teamTypes: []
		};
	}

	componentDidMount() {
		this.setTeam();
	}
	componentDidUpdate(prevProps: Props) {
		if (
			prevProps.teamURLs !== this.props.teamURLs
		) {
			console.log("TeamBuilder - UPDATED");
			this.setState(
				{
					teamURLs: this.props.teamURLs,
					myTeam: [],
					teamTypes: []
				},
				() => {
					console.log("state", this.state.teamTypes);
					this.setTeam();
				}
			);
		}
	}

	setTeam = () => {
		let index: number = 0;

		this.state.teamURLs.forEach(async member => {
			const memberRes: any = await Axios.get(member);
			let memberData: any = memberRes.data;

			this.setState(
				{
					myTeam: [...this.state.myTeam, memberData]
				},
				() => {
					index++;
					if (index === this.props.teamURLs.length) {
						console.log("before setTeamTypes()", this.state.teamTypes);
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
				console.log(type, ":", teamTypes);

				this.setState(
					{
						teamTypes: teamTypes
					},
					() => {
						console.log("types set", this.state.teamTypes);
					}
				);
			});
		});
	};

	logState = () => {
		console.log("my-team", this.state.myTeam);
		console.log("my-types", this.state.teamTypes);
	};

	render() {
		return this.props.isDesktop ? (
			<div style={teamBuilderStyle}>
				<TeamSuper
					teamTypes={this.state.teamTypes}
					isDesktop={this.props.isDesktop}
				/>
				<MyTeam myTeam={this.state.myTeam} isDesktop={this.props.isDesktop} />
				<TeamWeak
					teamTypes={this.state.teamTypes}
					isDesktop={this.props.isDesktop}
				/>

				<div style={btnWrapper}>
					<Link to="/">BACK</Link>
					{/* <button onClick={this.props.clearAll}>CLEAR ALL</button> */}
					<button onClick={this.logState}>log State</button>
				</div>
			</div>
		) : (
			<div style={teamBuilderStyleMobile}>
				<MyTeam myTeam={this.state.myTeam} isDesktop={this.props.isDesktop} />
				<TeamSuper
					teamTypes={this.state.teamTypes}
					isDesktop={this.props.isDesktop}
				/>
				<TeamWeak
					teamTypes={this.state.teamTypes}
					isDesktop={this.props.isDesktop}
				/>

				<div style={btnWrapper}>
					<Link to="/">BACK</Link>
					{/* <button onClick={this.props.clearAll}>CLEAR ALL</button> */}
					<button onClick={this.logState}>log State</button>
				</div>
			</div>
		);
	}
}

export default withRouter(TeamBuilder);

const teamBuilderStyleMobile: React.CSSProperties = {
	width: "100%",
	height: "100%",

	padding: "1rem",

	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",
	alignItems: "flex-start"
};
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
