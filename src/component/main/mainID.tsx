import * as React from "react";

interface Props {
	id: any;
}
export default class MainID extends React.Component<Props> {
	render() {
		return (
			<div style={IdStyle}>
				<p style={absoluteText}>ID</p>
				<p style={idText}>0{this.props.id}</p>
			</div>
		);
	}
}

const IdStyle: React.CSSProperties = {
	position:"relative",

	gridArea: "ID",

	width: "40%",
	height: "15%",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontWeight: "bold",

	background: "#52ae5f"
};

const idText: React.CSSProperties = {
	fontSize: "5rem",
};

const absoluteText: React.CSSProperties = {
	position: "absolute",
	top:"-2.4rem",
	left:".2rem",

	fontSize:"2.2rem",
	color:"#e7e7e7"
};
