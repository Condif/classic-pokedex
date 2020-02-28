import * as React from "react";

import MainDex from "./main/mainDex";
import InfoDex from "./info/infoDex";

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<MainDex />
				<InfoDex />
			</div>
		);
	}
}
