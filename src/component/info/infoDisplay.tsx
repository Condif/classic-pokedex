import * as React from "react";
import { Pokemon } from "../../types";

interface Props {
	pokemon: Pokemon;
}
export default class InfoDisplay extends React.Component<Props> {
	render() {
		const types: string[] = [];

		this.props.pokemon.types?.forEach(type => {
			types.push(type.type.name);
		});
		return (
			<div>
				<h3>InfoDex</h3>
				<h4>{this.props.pokemon.name}</h4>
				<p>height: {this.props.pokemon.height}</p>
				<p>weight: {this.props.pokemon.weight}</p>

				<p>
					Type:
					{types.map(type => (
						<p>{type}</p>
					))}
				</p>
			</div>
		);
	}
}

