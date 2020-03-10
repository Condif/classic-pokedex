import * as React from "react";
import { Pokemon } from "../../../types";

import Move from "./infoMove";

interface Props {
	pokemon: Pokemon;
}

export default class InfoDisplayMoves extends React.Component<Props> {
	render() {

		return (
			<div style={displayStyle}>
				<h1 style={movesHeaderStyle}>Moves:</h1>

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
	overflow: "hidden"
};


const movesHeaderStyle: React.CSSProperties = {
	paddingBottom:".5rem",
	marginBottom:".5rem",
	borderBottom:".2rem solid #333"

};

const movesListStyle: React.CSSProperties = {
	width: "100%",

	background: "#272727",

	overflowY: "scroll"
};

