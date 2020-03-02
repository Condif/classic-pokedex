import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./component/layout";

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		);
	}
}
