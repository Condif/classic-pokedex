import * as React from "react";

export default class MainNavpad extends React.Component {
	render() {
		return (
			<div style={navpadStyle}>
				<button style={{ ...u, ...btn }}></button>
				<button style={{ ...r, ...btn }}></button>
				<button style={{ ...btn, ...m }}></button>
				<button style={{ ...d, ...btn }}></button>
				<button style={{ ...l, ...btn }}></button>
			</div>
		);
	}
}

const navpadStyle: React.CSSProperties = {
	width: "8rem",
	height: "8rem",

	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr",
	gridTemplateRows: "1fr 1fr 1fr",
	gridTemplateAreas: "'. u .' 'l m r' '. d .'"
};

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

const btn: React.CSSProperties = {
	outline: "none",
	background: "#555",
	border: ".5rem solid #333"
};
