import * as React from "react";
import "../../mainNavpadStyle.css"
import { Link } from "react-router-dom";

interface Props {
	idUp: () => void;
	idDown: () => void;
}

export default class MainNavpad extends React.Component<Props> {
	render() {
		return (
			<div style={navpadStyle}>
				<button style={{ ...u, ...btn }} onClick={this.props.idUp}></button>
				<button style={{ ...r, ...btn }}></button>
				<Link to="/teamPage"style={{ ...btn, ...m }}></Link>
				<button style={{ ...l, ...btn }}></button>
				<button style={{ ...d, ...btn }} onClick={this.props.idDown}></button>
			</div>
		);
	}
}

const u: React.CSSProperties = {
	gridArea: "u",

	borderRadius: ".5rem .5rem 0 0"
};
const r: React.CSSProperties = {
	gridArea: "r",

	borderRadius: " 0 .5rem .5rem 0"
};
const d: React.CSSProperties = {
	gridArea: "d",

	borderRadius: " 0 0 .5rem .5rem "
};
const l: React.CSSProperties = {
	gridArea: "l",

	borderRadius: ".5rem 0 0 .5rem"
};
const m: React.CSSProperties = {
	gridArea: "m"
	// borderRadius:"50%",
};
