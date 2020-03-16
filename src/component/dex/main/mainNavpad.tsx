import * as React from "react";
import "../../mainNavpadStyle.css"
import { Link } from "react-router-dom";

interface Props {
	handleUpclick: () => void
	handleDownclick: () => void
}

export default class MainNavpad extends React.Component<Props> {
	render() {
		return (
			<div className="navpadStyle">
				<button className="btn" style={u}></button>
				<button onClick={this.props.handleUpclick} className="btn" style={r}></button>
				<button className="btn" style={d}></button>
				<button onClick={this.props.handleDownclick} className="btn" style={l}></button>
				<Link to="/teamPage"style={{ ...btn, ...m }}></Link>
			</div>
		);
	}
}

const u: React.CSSProperties = {
	gridArea: "u",
	boxShadow: ".5rem solid #333",

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

const btn: React.CSSProperties = {
	outline: "none",
	background: "#555",
	border: ".5rem solid #333"
};
