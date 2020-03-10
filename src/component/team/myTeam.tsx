import * as React from "react";

import { myPokemon } from "../../types";

interface Props {
	myTeam: myPokemon[];
}
interface State {
	chosenpokemon: any;
}

export default class MyTeam extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			chosenpokemon: this.props.myTeam[0]
		};
	}

	

	imageClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		console.log(event.target);
	};
	removeMember = () => {
		console.log("remove Member");
	};

	render() {
		return (
			<div style={teamWrapperStyle} className="teamWrapper">
				{this.props.myTeam.map(member => {
					return (
						<div style={memberStyle} className="teamMember">
							<div style={memberTextWrapper}>
								<p style={memberName}>{member.name}</p>

								<ul style={memberMoveList}>
									{member.moves[0] && (
										<li style={memberMove}>{member.moves[0]}</li>
									)}
									{!member.moves[0] && <li style={memberMove}>...</li>}
									{member.moves[1] && (
										<li style={memberMove}>{member.moves[1]}</li>
									)}
									{!member.moves[1] && <li style={memberMove}>...</li>}
									{member.moves[2] && (
										<li style={memberMove}>{member.moves[2]}</li>
									)}
									{!member.moves[2] && <li style={memberMove}>...</li>}
									{member.moves[3] && (
										<li style={memberMove}>{member.moves[3]}</li>
									)}
									{!member.moves[3] && <li style={memberMove}>...</li>}
								</ul>
							</div>
							<div style={imageWrapper} className="imageWrapper">
								<img
									src={member.sprite}
									style={imgStyle}
									onClick={this.imageClick}></img>
								<button style={removeButton} onClick={this.removeMember}></button>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

const teamWrapperStyle: React.CSSProperties = {
	width: "60%",

	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-around",
	alignItems: "flex-start"
};

const memberStyle: React.CSSProperties = {
	width: "50%",
	height: "10rem",

	padding: ".5rem",

	objectFit: "contain",

	display: "flex",
	justifyContent: "space-around",
	alignItems: "center"
};

const imageWrapper: React.CSSProperties = {
	position: "relative"
};
const imgStyle: React.CSSProperties = {
	height: "8rem",
	padding: ".5rem",
	margin: ".5rem",

	background: "#ff562288",

	objectFit: "contain"
};
const removeButton: React.CSSProperties = {
	position: "absolute",
	top: 0,
	right: 0,

	margin: "1rem",

	height: ".4rem",
	width: "1.2rem",

	background: "#1238",
	border: "none",
	fontSize: "1.5rem"
};

const memberTextWrapper: React.CSSProperties = {
	width: "70%",
	height: "100%",

	padding: ".5rem",

	display: "flex",
	flexDirection: "column",
	justifyContent: "center"
};
const memberName: React.CSSProperties = {
	fontSize: "1.5rem",
	fontWeight: "bold",
	color: "#333",

	borderBottom: ".2rem solid #ababab"
};
const memberMoveList: React.CSSProperties = {
	margin: ".5rem 0",

	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",

	listStyle: "none"
};
const memberMove: React.CSSProperties = {
	width: "46%",
	margin: "0 2%",
	padding: "2%",

	borderBottom: ".1rem solid #ababab",

	fontSize: ".8rem",
	fontWeight: "lighter"
};
