import * as React from "react";
import Axios from "axios";

import MyTeam from "./myTeam";
import TeamSuper from "./teamSuper";
import TeamWeak from "./teamWeak";
import { TeamPokemons } from "../../types";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {
	teamURLs: TeamPokemons;
	isDesktop: boolean;
}
interface State {
	teamURLs: TeamPokemons;
	myTeam: any[];
	teamTypes: any[];
	emptySlots: number;
}

class TeamBuilder extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			teamURLs: this.props.teamURLs,
			myTeam: [],
			teamTypes: [],

			emptySlots: 6 - this.props.teamURLs.length
		};
	}

	componentDidMount() {
		console.log("empty slots", this.state.emptySlots);

		this.setTeam();
		if (this.state.myTeam.length === 0) {
			console.log("my team is empty");

			this.generateEmpty();
		}
	}

	componentDidUpdate(prevProps: Props) {
		// console.log("url length",this.state.teamURLs.length);
		console.log("teambuilder - UPDATED");

		if (prevProps.teamURLs !== this.props.teamURLs) {
			this.setState(
				{
					teamURLs: this.props.teamURLs,
					myTeam: [],
					teamTypes: []
				},
				() => {
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
						this.setTeamTypes();
					}
				}
			);
		});
	};

	setTeamTypes = () => {
		let teamTypes: any = [];
		let index: number = 0;

		this.state.myTeam.forEach(member => {
			index++;
			console.log(index);
			member.types.forEach((type: any) => {
				teamTypes.push(type.type);

				this.setState({
					teamTypes: teamTypes
				});
				if (index === this.props.teamURLs.length) {
					console.log("done");
					let emptySlots = this.generateEmpty();
					console.log(emptySlots);

					this.setState({
						myTeam: [...this.state.myTeam, ...emptySlots]
					});
				}
			});
		});
	};

	generateEmpty = () => {
		const emptySlots = 6 - this.props.teamURLs.length;
		let fakeList: any = [];
		console.log("empty slots : ", emptySlots);

		const fakeMember: any = {
			moves: [
				{
					move: {
						name: "",
						url: ""
					}
				}
			],
			name: "empty",
			sprites: {
				front_default: "https://pngimg.com/uploads/pokeball/pokeball_PNG24.png"
			},
			types: [
				{
					type: {
						name: "",
						url: ""
					}
				}
			],
			exists: false
		};

		for (let i = 0; i < emptySlots; i++) {
			fakeList.push(fakeMember);

			if (i === emptySlots) {
				console.log(fakeList);
				return fakeList;
			}
		}

		return fakeList;
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
