import * as React from "react";

import MyTeam from "./myTeam"

interface Props {}
interface State {}

export default class TeamBuilder extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		return <MyTeam />
	}
}
