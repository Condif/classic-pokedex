import * as React from "react";

interface Props {
	teamTypes: any;
}
interface State {
	weaks: any;
}

export default class TeamWeaks extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			weaks: {
				normal: 0,
				fire: 0,
				water: 0,
				electric: 0,
				grass: 0,
				ice: 0,
				fighting: 0,
				poison: 0,
				ground: 0,
				flying: 0,
				psychic: 0,
				bug: 0,
				rock: 0,
				ghost: 0,
				dragon: 0,
				dark: 0,
				steel: 0,
				fairy: 0
			}
		};
	}

	filterWeaks = () => {};

	render() {
		return (
			<div style={weaksStyle}>
				<h2>Weaks</h2>

				<div></div>
			</div>
		);
	}
}

const weaksStyle: React.CSSProperties = {
	height: "100%",
	width: "20%",

	background: "#1234"
};
