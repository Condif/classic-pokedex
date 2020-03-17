import * as React from "react";

import { TeamPokemons } from "../../types";
import { RouteComponentProps, withRouter } from "react-router";

interface Props extends RouteComponentProps {
	myTeam: TeamPokemons;
	isDesktop: boolean;
}
interface State {}

class MyTeam extends React.Component<Props, State> {


	render() {
		let index: number = 0;

		return (
			<div
				style={this.props.isDesktop ? teamWrapperStyle : teamWrapperStyleMobile}
				className="teamWrapper">
				{this.props.myTeam.map((member: any) => {
					index++;
					return (
						<div key={index} style={memberStyle} className="teamMember">
							<div style={memberTextWrapper}>
								<p style={memberName}>{member.name ? member.name : "empty"}</p>

								{this.props.isDesktop ? (
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
								) : null}
							</div>

							<div style={imageWrapper} className="imageWrapper">
								<img
									src={member.sprites.front_default}
									alt="sprite"
									style={imgStyle}></img>
							</div>
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
	// flexDirection: "column",
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

	listStyle: "none",

	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap"
};
const memberMove: React.CSSProperties = {
	width: "46%",
	margin: "1%",
	padding: "1%",

	borderBottom: ".1rem solid #ababab",
	background: "#4444",

	fontSize: "50%",
	fontWeight: "lighter"
};
