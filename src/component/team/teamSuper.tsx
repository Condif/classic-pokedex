import * as React from "react";
import {
	normal,
	fire,
	water,
	electric,
	grass,
	ice,
	fighting,
	poison,
	ground,
	flying,
	psychic,
	bug,
	rock,
	ghost,
	dragon,
	dark,
	steel,
	fairy
} from "../css";

import axios from "axios";

interface Props {
	teamTypes: string[];
}
interface State {
	super: any;
}

export default class TeamSuper extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			super: [
				["normal", []],
				["fire", []],
				["water", []],
				["electric", []],
				["ice", []],
				["fighting", []],
				["poison", []],
				["ground", []],
				["flying", []],
				["psychic", []],
				["bug", []],
				["rock", []],
				["ghost", []],
				["dragon", []],
				["dark", []],
				["steel", []],
				["fairy", []]
			]
		};
	}

	filterSupers = async () => {
		this.props.teamTypes.forEach(type => this.fetchSuper(type));
	};

	fetchSuper = async (type: string) => {
		const seRes: any = await axios.get(
			"https://pokeapi.co/api/v2/type/" + type
		);
		const superList = seRes.data.damage_relations.double_damage_to

		superList.forEach((superType : any) => {
			for(let i = 0; i < this.state.super.length; i++) {
				
				if(superType.name === this.state.super[i][0]) {
					console.log("2");
					
				}
			}
		});
	};

	render() {
		this.filterSupers();

		return (
			<div style={superStyle}>
				<h2>Super</h2>

				<div>
					{this.state.super.map((type: [string, string[]]) => {
						const howGood = (
							<div style={measureList}>
								{type[1].map(measure => {
									switch (type[0]) {
										case "normal":
											return <p style={{ ...measureStyle, ...normal }}></p>;
										case "fire":
											return <p style={{ ...measureStyle, ...fire }}></p>;
										case "water":
											return <p style={{ ...measureStyle, ...water }}></p>;
										case "electric":
											return <p style={{ ...measureStyle, ...electric }}></p>;
										case "grass":
											return <p style={{ ...measureStyle, ...grass }}></p>;
										case "ice":
											return <p style={{ ...measureStyle, ...ice }}></p>;
										case "fighting":
											return <p style={{ ...measureStyle, ...fighting }}></p>;
										case "poison":
											return <p style={{ ...measureStyle, ...poison }}></p>;
										case "ground":
											return <p style={{ ...measureStyle, ...ground }}></p>;
										case "flying":
											return <p style={{ ...measureStyle, ...flying }}></p>;
										case "psychic":
											return <p style={{ ...measureStyle, ...psychic }}></p>;
										case "bug":
											return <p style={{ ...measureStyle, ...bug }}></p>;
										case "rock":
											return <p style={{ ...measureStyle, ...rock }}></p>;
										case "ghost":
											return <p style={{ ...measureStyle, ...ghost }}></p>;
										case "dragon":
											return <p style={{ ...measureStyle, ...dragon }}></p>;
										case "dark":
											return <p style={{ ...measureStyle, ...dark }}></p>;
										case "steel":
											return <p style={{ ...measureStyle, ...steel }}></p>;
										case "fairy":
											return <p style={{ ...measureStyle, ...fairy }}></p>;
									}
								})}
							</div>
						);

						return type[1].length > 0 ? (
							<div style={measureWrapper}>{howGood}</div>
						) : null;
					})}
				</div>
				<hr />
			</div>
		);
	}
}

const superStyle: React.CSSProperties = {
	height: "100%",
	width: "20%"
};

const measureWrapper: React.CSSProperties = {
	padding: ".5rem",
	margin: ".2rem",

	display: "flex",

	background: "#3338"
};
const measureList: React.CSSProperties = {
	display: "flex"
};
const measureStyle: React.CSSProperties = {
	width: ".5rem",
	height: "1rem",

	margin: ".2rem",

	background: "#ff49ad"
};
