import * as React from "react";
import "../../mainNavpadStyle.css"

export default class MainNavpad extends React.Component {
	render() {
		return (
			<div className="navpadStyle">
				<button className="btn" style={u}></button>
				<button className="btn" style={r}></button>
				<button className="btn" style={m}></button>
				<button className="btn" style={d}></button>
				<button className="btn" style={l}></button>
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
	gridArea: "m",
	// borderRadius:"50%",
};

