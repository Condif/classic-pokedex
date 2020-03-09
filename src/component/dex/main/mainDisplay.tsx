import * as React from "react";

interface Props {
	sprite: any;
	name: any;
	weight: any;
	height: any;
}
export default class MainDisplay extends React.Component<Props> {
	render() {
		return (
			<div style={{ ...outerDisplayStyle, ...center }}>
				<div style={innerDisplayStyle}>
					{this.props.children}
					<img src={this.props.sprite} alt="sprite" style={imageStyle} />
					<h2 style={nameStyle}>{this.props.name}</h2>
					<div style={whWrapperStyle}>
						<p style={whStyle}>height</p>
						<p style={whValueStyle}>{this.props.height / 10}&nbsp;m</p>
						<p style={whStyle}>weight</p>
						<p style={whValueStyle}>{this.props.weight / 10}&nbsp;kg</p>
					</div>
				</div>
			</div>
		);
	}
}

const outerDisplayStyle: React.CSSProperties = {
	position: "relative",

	marginTop: "6rem",

	width: "80%",
	maxWidth: "37rem",
	minWidth: "10rem",

	height: "70%",
	maxHeight: "30rem",
	minHeight: "15rem",

	padding: "1.2rem",

	background: "#e7e7e7",
	borderRadius: ".5rem"
};

const innerDisplayStyle: React.CSSProperties = {
	position: "relative",

	width: "100%",
	height: "100%",

	background: "#272727",
	borderRadius: ".5rem",

	display: "flex",
	flexDirection:"column",
	justifyContent: "center",
	alignItems: "center",
	overflow: "hidden"
};

const nameStyle: React.CSSProperties = {
	position: "absolute",
	bottom: '4.5rem',

	// margin:"1rem",

	width: "90%",

	color: "#e7e7e7",

	padding: "1rem .5rem 0 .5rem",
	borderBottom: ".2rem solid #e7e7e7",

	textTransform: "capitalize",
	fontSize: "2rem"
};

const whWrapperStyle: React.CSSProperties = {
	position:"absolute",
	bottom:".5rem",
	left:"50%",
	transform:"translatex(-50%)",

	color:"#777",

	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-evenly",
	alignItems: "center"
};
const whStyle: React.CSSProperties = {
	width: "40%",
	margin: ".2rem",

	borderRight: ".2rem solid #555",
	textTransform: "capitalize"
};
const whValueStyle: React.CSSProperties = {
	width: "40%",
	margin: ".3rem",
	textAlign: "right",
	borderBottom: ".1rem solid #555"
};

const imageStyle: React.CSSProperties = {
	width: "65%",
	objectFit: "cover",
	imageRendering: "pixelated"
};

const center: React.CSSProperties = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
};
