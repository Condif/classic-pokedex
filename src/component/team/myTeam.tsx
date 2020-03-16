import * as React from "react";

import { TeamPokemons } from "../../types";
import { RouteComponentProps, withRouter } from "react-router";

interface Props extends RouteComponentProps {
	myTeam: TeamPokemons;
	isDesktop: boolean;
}
interface State {}

class MyTeam extends React.Component<Props, State> {
	removeMember = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log("button Clicked");
		console.log(event);
	};

	render() {
		let index: number = 0;

		return (
			<div
				style={this.props.isDesktop ? teamWrapperStyle : teamWrapperStyleMobile}
				className="teamWrapper">
				{this.props.myTeam.map((member: any) => {
					index++;
					return (
						<div key={} style={memberStyle} className="teamMember">
							<div style={memberTextWrapper}>
								<p style={memberName}>{member.name ? member.name : "empty"}</p>

								<ul style={memberMoveList}>
									{member.moves ? (
										<li style={memberMove}>{member.moves[0].move.name}</li>
									) : (
										<li style={memberMove}>. . .</li>
									)}
									{member.moves[1] ? (
										<li style={memberMove}>{member.moves[1].move.name}</li>
									) : (
										<li style={memberMove}>. . .</li>
									)}
									{member.moves[2] ? (
										<li style={memberMove}>{member.moves[2].move.name}</li>
									) : (
										<li style={memberMove}>. . .</li>
									)}
									{member.moves[3] ? (
										<li style={memberMove}>{member.moves[3].move.name}</li>
									) : (
										<li style={memberMove}>. . .</li>
									)}
								</ul>
							</div>

							<div style={imageWrapper} className="imageWrapper">
								<img
									src={member.sprites.front_default}
									alt="sprite"
									style={imgStyle}></img>
							</div>
							{member.name === "empty" ? null : (
								<button
									style={removeButton}
									onClick={this.removeMember}></button>
							)}
						</div>
					);
				})}
			</div>
		);
	}
}

export default withRouter(MyTeam);

const teamWrapperStyleMobile: React.CSSProperties = {
	width: "100%",

	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-around",
	alignItems: "flex-start"
};
const teamWrapperStyle: React.CSSProperties = {
	width: "60%",

	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-around",
	alignItems: "flex-start"
};

const memberStyle: React.CSSProperties = {
	position: "relative",

	width: "50%",
	height: "10rem",

	padding: ".5rem",

	objectFit: "contain",
	textTransform: "capitalize",

	display: "flex",
	justifyContent: "space-around",
	alignItems: "center"
};

const imageWrapper: React.CSSProperties = {
	position: "relative",

	height: "8rem",
	width: "8rem",

	border: ".1rem solid #272727",
	borderRadius: ".1rem",

	display: "flex",
	flexDirection: "column",
	justifyContent: "center",

	overflow: "hidden"
};
const imgStyle: React.CSSProperties = {
	padding: ".5rem",
	margin: ".5rem",

	background: "#1238",

	objectFit: "contain",

	transform: "scale(1.2)"
};
const removeButton: React.CSSProperties = {
	position: "absolute",
	top: 0,
	right: 0,

	margin: ".5rem",

	height: ".4rem",
	width: "1.2rem",

	background: "#1238",
	border: "none",
	fontSize: "1.5rem"
};

const memberTextWrapper: React.CSSProperties = {
	position: "relative",

	width: "70%",
	height: "100%",

	padding: ".5rem",

	display: "flex",
	flexDirection: "column",
	justifyContent: "center"
};
const memberName: React.CSSProperties = {
	textAlign: "right",
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
