import * as React from "react";
import { Pokemon } from "../../../types";

import Move from "./infoMove";

interface Props {
	pokemon: Pokemon;
}

export default class InfoDisplayMoves extends React.Component<Props> {
	render() {
		const moves: string[] = [];
		const flavorText: string[] = [];
		let movesIndex: number = 0;

		this.props.pokemon.moves?.forEach(move => {
			moves.push(move.move.name);
		});

		this.props.pokemon.movesFlavorText?.forEach(text => {
			flavorText.push(text);
		});

		function createFlavorText(i: number) {
			movesIndex++;
			return flavorText[i];
		}

		return (
			<div style={displayStyle}>
				<h1>Moves:</h1>

				<div style={movesListStyle}>
					{this.props.pokemon.moves?.map(move => (
						<Move url={move.move.url} />
					))}
				</div>
			</div>
		);
	}
}

const displayStyle: React.CSSProperties = {
	height: "100%",
	width: "90%",

	maxWidth: "35rem",

	padding: "1rem",
	margin: "2rem",
	marginTop: "6rem",

	background: "#272727",
	color: "#e7e7e7",
	borderRadius: "1rem",

	display: "flex",
	flexDirection: "column",

	overflowY: "scroll"
};

const movesListStyle: React.CSSProperties = {
	width:"100%",

	background: "#272727"
};

const nameStyle: React.CSSProperties = {
	fontWeight: "bold",
	textTransform: "uppercase",
	listStyleType: "none"
};
const flavorTextStyle: React.CSSProperties = {
	fontWeight: "normal",
	textTransform: "none"
};
