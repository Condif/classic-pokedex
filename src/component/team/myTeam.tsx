import * as React from "react";

import { myPokemon } from "../../types";

interface Props {}
interface State {
	myTeam: myPokemon[];
	chosenpokemon: any;
}

export default class MyTeam extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			myTeam: [
				{
					name: "template",
					moves: ["kick", "punch", "bite"],
					sprite:
						"https://pngimage.net/wp-content/uploads/2018/06/missingno-png.png"
				},
				{
					name: "template",
					moves: ["kick", "punch", "bite"],
					sprite:
						"https://pngimage.net/wp-content/uploads/2018/06/missingno-png.png"
				},
				{
					name: "template",
					moves: ["kick", "punch", "bite"],
					sprite:
						"https://pngimage.net/wp-content/uploads/2018/06/missingno-png.png"
				},
				{
					name: "template",
					moves: ["kick", "punch", "bite"],
					sprite:
						"https://pngimage.net/wp-content/uploads/2018/06/missingno-png.png"
				},
				{
					name: "template",
					moves: ["kick", "punch", "bite"],
					sprite:
						"https://pngimage.net/wp-content/uploads/2018/06/missingno-png.png"
				},
				{
					name: "template",
					moves: ["kick", "punch", "bite"],
					sprite:
						"https://pngimage.net/wp-content/uploads/2018/06/missingno-png.png"
				}
			],
			chosenpokemon: undefined
		};
	}

	render() {
		return (
			<div style={teamWrapperStyle}>
				{this.state.myTeam.map(member => {
					return (
						<div style={memberStyle}>
							<div style={memberText}>
								<p style={memberName}>{member.name}</p>

								<ul style={memberMoveList}>
									{member.moves[0] && (
										<li style={memberMove}>{member.moves[0]}</li>
									)}
									{!member.moves[0] && <li style={memberMove}>no move</li>}
									{member.moves[1] && (
										<li style={memberMove}>{member.moves[1]}</li>
									)}
									{!member.moves[1] && <li style={memberMove}>no move</li>}
									{member.moves[2] && (
										<li style={memberMove}>{member.moves[2]}</li>
									)}
									{!member.moves[2] && <li style={memberMove}>no move</li>}
									{member.moves[3] && (
										<li style={memberMove}>{member.moves[3]}</li>
									)}
									{!member.moves[3] && <li style={memberMove}>no move</li>}
								</ul>
							</div>
							<img src={member.sprite} style={imgStyle}></img>
						</div>
					);
				})}
			</div>
		);
	}
}

const teamWrapperStyle: React.CSSProperties = {
	width: "70%",
	height: "100%",
	margin: "auto",


	display: "flex",
	flexWrap: "wrap"
};

const memberStyle: React.CSSProperties = {
	width: "40%",
	height: "8rem",
	margin: "1rem",

	objectFit: "contain",

	display: "flex",
	justifyContent: "center",
	alignItems: "center"
};

const imgStyle: React.CSSProperties = {
	width: "8rem",
    height: "8rem",
    padding:".5rem",

    background:"#ff5622",

    objectFit: "contain",
};

const memberText: React.CSSProperties = {
};
const memberName: React.CSSProperties = {
	fontSize: "2rem",
	fontWeight: "bold"

};
const memberMoveList: React.CSSProperties = {
	display: "flex",
	flexWrap: "wrap"
};
const memberMove: React.CSSProperties = {
	width: "50%"

};
