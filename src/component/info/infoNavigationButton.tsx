import * as React from "react";
import { buttonName } from "../../types";

interface Props {
	buttonName: buttonName;
}

export default class InfoDisplay extends React.Component<Props> {
	render() {
		return <p style={buttonStyle}>{this.props.buttonName}</p>;
	}
}

const buttonStyle: React.CSSProperties = {
	background: "#2aa9fe",
	cursor: "pointer"
};
