import * as React from "react";
import { Pokemon } from "../../types";

interface Props {
	pokemon: Pokemon;
}
export default class InfoDisplay extends React.Component<Props> {
	typeColor = (type: string) => {
		if (type === "normal") {
			return <p style={normal}>{type}</p>;
		}
		if (type === "fire") {
			return <p style={fire}>{type}</p>;
		}
		if (type === "water") {
			return <p style={water}>{type}</p>;
		}
		if (type === "electric") {
			return <p style={electric}>{type}</p>;
		}
		if (type === "grass") {
			return <p style={grass}>{type}</p>;
		}
		if (type === "ice") {
			return <p style={ice}>{type}</p>;
		}
		if (type === "fighting") {
			return <p style={fighting}>{type}</p>;
		}
		if (type === "poison") {
			return <p style={poison}>{type}</p>;
		}
		if (type === "ground") {
			return <p style={ground}>{type}</p>;
		}
		if (type === "flying") {
			return <p style={flying}>{type}</p>;
		}
		if (type === "psychic") {
			return <p style={psychic}>{type}</p>;
		}
		if (type === "bug") {
			return <p style={bug}>{type}</p>;
		}
		if (type === "rock") {
			return <p style={rock}>{type}</p>;
		}
		if (type === "ghost") {
			return <p style={ghost}>{type}</p>;
		}
		if (type === "dragon") {
			return <p style={dragon}>{type}</p>;
		}
		if (type === "dark") {
			return <p style={dark}>{type}</p>;
		}
		if (type === "steel") {
			return <p style={steel}>{type}</p>;
		}
		if (type === "fairy") {
			return <p style={fairy}>{type}</p>;
		} else {
			return <p>{type}</p>;
		}
	};

	render() {
		const types: string[] = [];

		console.log(this.props.pokemon);

		this.props.pokemon.types?.forEach(type => {
			types.push(type.type.name);
		});
		return (
			<div style={displayStyle}>
				<h3 style={nameStyle}>{this.props.pokemon.name}</h3>
				<p>height: {this.props.pokemon.height}</p>
				
				<p>weight: {this.props.pokemon.weight}</p>

				<p>Type:</p>
				<div style={typeStyle}>{types.map(type => this.typeColor(type))}</div>

				<p>Bio: {this.props.pokemon.pokemonBio}</p>
				
			</div>
		);
	}
}

const displayStyle: React.CSSProperties = {
	background: "#272727",
	color: "#e7e7e7",
	padding: "1rem"
};
const nameStyle: React.CSSProperties = {
	background: "#272727",
	color: "#e7e7e7",
	padding: ".2rem",
	borderBottom: ".2rem solid #e7e7e7",

	textTransform: "capitalize",
	fontSize: "2rem"
};
const typeStyle: React.CSSProperties = {
	textTransform: "uppercase",
	fontSize:"bold"
};

const normal: React.CSSProperties = {
	color: "#a8a77a"
};
const fire: React.CSSProperties = {
	color: "#ee8130"
};
const water: React.CSSProperties = {
	color: "#6390f0"
};
const electric: React.CSSProperties = {
	color: "#f7d02c"
};
const grass: React.CSSProperties = {
	color: "#7ac74c"
};
const ice: React.CSSProperties = {
	color: "#96d9d6"
};
const fighting: React.CSSProperties = {
	color: "#c22e28"
};
const poison: React.CSSProperties = {
	color: "#a33ea1"
};
const ground: React.CSSProperties = {
	color: "#e2bf65"
};
const flying: React.CSSProperties = {
	color: "#a98ff3"
};
const psychic: React.CSSProperties = {
	color: "#f95587"
};
const bug: React.CSSProperties = {
	color: "#a6b91a"
};
const rock: React.CSSProperties = {
	color: "#b6a136"
};
const ghost: React.CSSProperties = {
	color: "#735797"
};
const dragon: React.CSSProperties = {
	color: "#6f35fc"
};
const dark: React.CSSProperties = {
	color: "#705746"
};
const steel: React.CSSProperties = {
	color: "#b7b7ce"
};
const fairy: React.CSSProperties = {
	color: "#d685ad"
};
