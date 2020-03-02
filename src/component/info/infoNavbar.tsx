import * as React from "react";

import { buttonName } from "../../types";
import NavigationButton from "./infoNavigationButton";

export default class InfoNavbar extends React.Component {
	render() {
		const navIndex: buttonName[] = [
			"bio",
			"moves",
			"back"
		];

		return (
			<div>
				<h3>Navbar</h3>

				<div style={navStyle}>
				{navIndex.map(value => (
					<NavigationButton buttonName={value} />
				))}
				</div>

			</div>
		);
	}
}

const navStyle: React.CSSProperties = {
	display: "flex",
	justifyContent:"center",
	alignItems:"center",

	background:"#dc0a2d"
}