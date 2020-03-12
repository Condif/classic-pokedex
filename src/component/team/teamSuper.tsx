import * as React from "react";
import DamageRelations from "./damageRelations";

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

export default class TeamSuper extends React.Component<Props> {
	render() {
		return (
			<div style={superStyle}>
				<h2>Supereffective</h2>
				<DamageRelations teamTypes={this.props.teamTypes} effect={"super"} />
				<hr />
			</div>
		);
	}
}
const superStyle: React.CSSProperties = {
	height: "100%",
	width: "20%"
};
