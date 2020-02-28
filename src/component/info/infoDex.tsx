import * as React from "react";

import InfoDisplay from "./infoDisplay"
import InfoNavbar from "./infoNavbar"

export default class InfoDex extends React.Component {
	render() {
		return (
			<div>
				<InfoDisplay />
				<InfoNavbar />
			</div>
		);
	}
}
