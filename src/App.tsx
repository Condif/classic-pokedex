import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./component/layout";

interface Props {}
interface State {
	isDesktop: boolean;
}
export default class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isDesktop: true
		};
	}

	componentDidMount = () => {
		window.addEventListener("resize", () => {
			console.log(window.innerWidth);
			if (window.innerWidth < 582) {
				this.setState({
					isDesktop: false
				});
			} else {
				this.setState({
					isDesktop: true
				});
			}
		});
	};

	render() {
		return (
			<BrowserRouter>
				<Layout isDesktop={this.state.isDesktop} />
			</BrowserRouter>
		);
	}
}
