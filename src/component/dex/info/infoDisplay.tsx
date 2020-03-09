import * as React from "react";
import { Pokemon } from "../../../types";
import Abilities from "./infoAbilities";

interface Props {
	pokemon: Pokemon;
}
export default class InfoDisplay extends React.Component<Props> {
	typeColor = (type: string) => {
		switch (type) {
			case "normal":
				return <p style={{ ...typeTextStyle, ...normal }}>{type}</p>;
			case "fire":
				return <p style={{ ...typeTextStyle, ...fire }}>{type}</p>;
			case "water":
				return <p style={{ ...typeTextStyle, ...water }}>{type}</p>;
			case "electric":
				return <p style={{ ...typeTextStyle, ...electric }}>{type}</p>;
			case "grass":
				return <p style={{ ...typeTextStyle, ...grass }}>{type}</p>;
			case "ice":
				return <p style={{ ...typeTextStyle, ...ice }}>{type}</p>;
			case "fighting":
				return <p style={{ ...typeTextStyle, ...fighting }}>{type}</p>;
			case "poison":
				return <p style={{ ...typeTextStyle, ...poison }}>{type}</p>;
			case "ground":
				return <p style={{ ...typeTextStyle, ...ground }}>{type}</p>;
			case "flying":
				return <p style={{ ...typeTextStyle, ...flying }}>{type}</p>;
			case "psychic":
				return <p style={{ ...typeTextStyle, ...psychic }}>{type}</p>;
			case "bug":
				return <p style={{ ...typeTextStyle, ...bug }}>{type}</p>;
			case "rock":
				return <p style={{ ...typeTextStyle, ...rock }}>{type}</p>;
			case "ghost":
				return <p style={{ ...typeTextStyle, ...ghost }}>{type}</p>;
			case "dragon":
				return <p style={{ ...typeTextStyle, ...dragon }}>{type}</p>;
			case "dark":
				return <p style={{ ...typeTextStyle, ...dark }}>{type}</p>;
			case "steel":
				return <p style={{ ...typeTextStyle, ...steel }}>{type}</p>;
			case "fairy":
				return <p style={{ ...typeTextStyle, ...fairy }}>{type}</p>;
		}
	};

	render() {
		const types: string[] = [];
		this.props.pokemon.types?.forEach(type => {
			types.push(type.type.name);
		});
		return (
			<div style={displayStyle}>
				<div style={bioWrapperStyle}>
					<h4>Bio</h4>
					<p style={bioStyle}>{this.props.pokemon.pokemonBio}</p>
				</div>

				<div style={abilityWrapperStyle}>
					<h4>Abilities</h4>
					{this.props.pokemon.abilities?.map(ability => (
						<Abilities url={ability.ability.url} />
					))}
				</div>
				<div style={typeStyle}>{types.map(type => this.typeColor(type))}</div>
			</div>
		);
	}
}

const displayStyle: React.CSSProperties = {
	height: "100%",

	maxWidth: "35rem",

	padding: "1rem",
	margin: "2rem",
	marginTop: "6rem",

	background: "#272727",
	color: "#e7e7e7",
	borderRadius: "1rem",

	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between"
};

const bioWrapperStyle: React.CSSProperties = {
	height: "40%",
	
	padding: ".8rem",
	
	background: "#333",
	border: ".3rem double #272727"

};
const bioStyle: React.CSSProperties = {
};

const abilityWrapperStyle: React.CSSProperties = {
	height: "50%",

	padding: ".8rem",

	background: "#333",
	border: ".3rem double #272727"
};

// -- -- -- -- -- types

const typeStyle: React.CSSProperties = {
	width: "100%",
	maxWidth: "",

	padding: "1rem",

	textTransform: "uppercase",
	fontSize: "bold",

	display: "flex",
	justifyContent: "space-evenly"
};
const typeTextStyle: React.CSSProperties = {
	padding: "0.5rem 1rem",
	color: "#eee",

	letterSpacing: ".1rem",
	fontWeight: "bolder",

	borderRadius: "1rem"
};

const normal: React.CSSProperties = {
	background: "#a8a77a"
};
const fire: React.CSSProperties = {
	background: "#ee8130"
};
const water: React.CSSProperties = {
	background: "#6390f0"
};
const electric: React.CSSProperties = {
	color: "#333",
	background: "#f7d02c"
};
const grass: React.CSSProperties = {
	background: "#7ac74c"
};
const ice: React.CSSProperties = {
	color: "#333",
	background: "#96d9d6"
};
const fighting: React.CSSProperties = {
	background: "#c22e28"
};
const poison: React.CSSProperties = {
	background: "#a33ea1"
};
const ground: React.CSSProperties = {
	background: "#e2bf65"
};
const flying: React.CSSProperties = {
	background: "#a98ff3"
};
const psychic: React.CSSProperties = {
	background: "#f95587"
};
const bug: React.CSSProperties = {
	background: "#a6b91a"
};
const rock: React.CSSProperties = {
	background: "#b6a136"
};
const ghost: React.CSSProperties = {
	background: "#735797"
};
const dragon: React.CSSProperties = {
	background: "#6f35fc"
};
const dark: React.CSSProperties = {
	background: "#705746"
};
const steel: React.CSSProperties = {
	background: "#b7b7ce"
};
const fairy: React.CSSProperties = {
	background: "#d685ad"
};

