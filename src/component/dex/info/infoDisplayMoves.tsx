import React, { Suspense } from "react";
import { Pokemon } from "../../../types";
import PokeLoad from "../PokeLoad";
import "../../infoDisplayMovesStyle.css"

// import Move from "./infoMove";

const Move = React.lazy(() => 
import('./infoMove'))

interface Props {
	pokemon: Pokemon;
}

export default class InfoDisplayMoves extends React.Component<Props> {

	render() {

		return (
			<div className="displayStyle">
				<h1 style={movesHeaderStyle}>Moves:</h1>
				<Suspense fallback={ <PokeLoad /> }>
				<div style={movesListStyle}>
					{this.props.pokemon.moves?.map(move => (
						<Move key={move.move.name} url={move.move.url} />
					))}
				</div>
				</Suspense>
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
	marginTop: "3rem",

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

