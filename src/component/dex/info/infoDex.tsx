import * as React from "react";

import InfoDisplay from "./infoDisplayAbility";
import InfoNavbar from "./infoNavbar";
import { Pokemon } from "../../../types";
import { NavPage } from "../../../types";
import InfoDisplayMoves from "./infoDisplayMoves";
import "../../infodexStyle.css"

interface Props {
	pokemon: Pokemon;
	isDesktop: boolean;
}
interface State {
	page: NavPage;
}

export default class InfoDex extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			page: "moves"
		};
	}

	handleNavigateToBio = () => {
		this.setState({
			page: "bio"
		});
	};
	handleNavigateToMoves = () => {
		this.setState({
			page: "moves"
		});
	};

	render() {
		return (
			<div className="infoStyle">
				{ this.props.isDesktop && 
				<div style={cutout_1}></div>} 
				{this.props.isDesktop &&
				<div style={cutout_2}></div>}
					{this.state.page === "bio" && (
						<InfoDisplay isDesktop={this.props.isDesktop} pokemon={this.props.pokemon} />
					)}
					{this.state.page === "moves" && (
						<InfoDisplayMoves pokemon={this.props.pokemon} />
					)}

				<InfoNavbar
					isDesktop={this.props.isDesktop}
					navigateToBio={this.handleNavigateToBio}
					navigateToMoves={this.handleNavigateToMoves}
				/>
			</div>
		);
	}
}

const cutout_1: React.CSSProperties = {
	position: "absolute",
	top: 0,
	right: 0,

	width: "45%",
	height: "4rem",

	background: "#e7e7e7",
	backgroundImage:
		"url(https://www.transparenttextures.com/patterns/hexellence.png)"
};
const cutout_2: React.CSSProperties = {
	position: "absolute",
	top: 0,
	right: "45%",

	width: "10rem",
	height: "4rem",

	background: "#e7e7e7",
	backgroundImage:
		"url(https://www.transparenttextures.com/patterns/hexellence.png)",

	transformOrigin: "100% 100%",
	transform: "rotate(45deg)"
};
