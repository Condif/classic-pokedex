import * as React from "react";

export default class MainNavpad extends React.Component {
	render() {
		return (
			<div style={navpadStyle}>
				<button style={{ ...u, ...btn }}></button>
				<button style={{ ...r, ...btn }}></button>
				<button style={{ ...d, ...btn }}></button>
				<button style={{ ...l, ...btn }}></button>
			</div>
		);
	}
}

const navpadStyle: React.CSSProperties = {
	width: "5rem",
	height: "5rem",

	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr",
	gridTemplateRows: "1fr 1fr 1fr",
	gridTemplateAreas: "'. u .' 'l . r' '. d .'"
};

const u: React.CSSProperties = {
	gridArea: "u"
};
const r: React.CSSProperties = {
	gridArea: "r"
};
const d: React.CSSProperties = {
	gridArea: "d"
};
const l: React.CSSProperties = {
	gridArea: "l"
};

const btn: React.CSSProperties = {
	background: "#555"
};
