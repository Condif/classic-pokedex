import * as React from "react";

interface Props {
	id: number | undefined
}
export default class MainID extends React.Component<Props> {

	render() {
		const id = this.props.id
		return (
			<div style={IdStyle}>
				<p style={absoluteText}>ID</p>
				{(id !== undefined && id < 10) && 
					<p style={idText}>00{this.props.id}</p> 
				}
				{(id !== undefined && id >= 10 && id <= 100) && 
					<p style={idText}>0{this.props.id}</p> 
				}
				{(id !== undefined && id > 99) && 
					<p style={idText}>{this.props.id}</p> 
				}
			</div>
		);
	}
}

const IdStyle: React.CSSProperties = {
	position:"relative",
	
	gridArea: "ID",

	

	width: "40%",
	maxWidth: "15rem",
	

	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontWeight: 800,

	background: "#52ae5f",
	backgroundImage:'url("https://www.transparenttextures.com/patterns/graphy.png")'
};

const idText: React.CSSProperties = {
	fontSize: "4.5rem",
	color:"#232"
};

const absoluteText: React.CSSProperties = {
	position: "absolute",
	top:"-2.4rem",
	left:".2rem",

	fontSize:"2.2rem",
	color:"#e7e7e7"
};
