import * as React from "react";

import MyTeam from "./myTeam";
import TeamSuper from "./teamSuper";
import TeamWeak from "./teamWeak";
import { myPokemon } from "../../types";

interface Props {}
interface State {
	myTeam: myPokemon[];
}

export default class TeamBuilder extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			myTeam: [
				{
					name: "Marchander",
					moves: ["ember", "punch", "baja", "snuggle"],
					sprite:
						"https://pngimage.net/wp-content/uploads/2018/06/missingno-png.png",
					type: ["fire"]
				},
				// {
				// 	name: "Sqquirtman",
				// 	moves: ["squirt", "fap", "nibble"],
				// 	sprite:
				// 		"https://pngimage.net/wp-content/uploads/2018/06/missingno-png.png",
				// 	type: ["water"]
				// },
				// {
				// 	name: "Bubbazoor",
				// 	moves: ["snatch", "zoink", "nibble","YEET"],
				// 	sprite:
				// 		"https://pngimage.net/wp-content/uploads/2018/06/missingno-png.png",
				// 	type: ["grass"]
				// },
				// {
				// 	name: "Kalaschnikorv",
				// 	moves: ["pew", "bang", "pom","krack"],
				// 	sprite:
				// 		"https://pngimage.net/wp-content/uploads/2018/06/missingno-png.png",
				// 	type: ["fire"]
				// },
				// {
				// 	name: "Tjorv",
				// 	moves: ["nuzz", "snugg", "smil"],
				// 	sprite:
				// 		"https://pngimage.net/wp-content/uploads/2018/06/missingno-png.png",
				// 	type: ["water"]
				// },
				// {
				// 	name: "Tjomme",
				// 	moves: ["parabol", "kiosk", "citronsaft", "ligma"],
				// 	sprite:
				// 		"https://pngimage.net/wp-content/uploads/2018/06/missingno-png.png",
				// 	type: ["grass"]
				// },
			]
		};
	}

	returnTeamTypes = () => {
		const teamTypes: string[] = []

		this.state.myTeam.forEach(pokemon => {
			teamTypes.push(pokemon.type[0])
			
		});
		return teamTypes
	};

	render() {

		return (
			<div style={teamBuilderStyle}>
				<TeamSuper teamTypes={this.returnTeamTypes()}/>
				<MyTeam myTeam={this.state.myTeam} />
				<TeamWeak teamTypes={this.returnTeamTypes()}/>
			</div>
		);
	}
}

const teamBuilderStyle: React.CSSProperties = {
	width: "100%",
	height: "100%",

	padding:"1rem",

	display: "flex",
	justifyContent: "center",
	alignItems: "flex-start"
};
