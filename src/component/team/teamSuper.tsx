import * as React from "react";
import DamageRelations from "./damageRelations";

interface Props {
	teamTypes: any[];
}

export default class TeamSuper extends React.Component<Props> {
	render() {
		return (
			<div style={superStyle}>
				<h2>Supereffective</h2>
				<hr />
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
