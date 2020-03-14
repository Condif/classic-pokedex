import React, { Suspense } from "react";
import { Pokemon } from "../../../types";
import PokeLoad from "../PokeLoad";
import "../../infoDisplayMovesStyle.css"

const ListGenerator = React.lazy(() => 
import('./ListGenerator'))

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
					<ListGenerator  
					listItems={this.props.pokemon.moves}
					textStyle={flavorTextStyle}
					nameStyle={flavorNameStyle}
					// flavorText
					/>
				</div>
				</Suspense>
			</div>
		);
	}
}

const flavorTextStyle: React.CSSProperties = {
	position: "relative",
	// width: "95%",
	padding: ".5rem 1rem",
	margin: ".2rem .5rem .2rem 0rem",
	
	background: "#333",
	
	fontSize: ".8rem"
};

const flavorNameStyle: React.CSSProperties = {
	position: "relative",
	// width: "90%",
	margin:".5rem .5rem .2rem 2rem",
    padding: ".3rem 0 .3rem .8rem",
	background: "#333",
    
};


const movesHeaderStyle: React.CSSProperties = {
	paddingBottom:".5rem",
	marginBottom:".5rem",
	borderBottom:".2rem solid #333"

};

const movesListStyle: React.CSSProperties = {
	position: "relative",
	width: "100%",

	background: "#272727",

	overflowY: "auto",
	overflowX: "hidden"
};

