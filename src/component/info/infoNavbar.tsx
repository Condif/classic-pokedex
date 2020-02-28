import * as React from "react";

import { buttonName } from "../../types";
import NavigationButton from "./infoNavigationButton";

export default class InfoNavbar extends React.Component {
	render() {
		const navIndex: buttonName[] = [
			"bio",
			"type",
			"region",
			"generation",
			"abilities",
			"back"
		];

		return (
			<div>
				<h2>Navbar</h2>
				{navIndex.map(value => (
					<NavigationButton buttonName={value} />
				))}
			</div>
		);
	}
}
