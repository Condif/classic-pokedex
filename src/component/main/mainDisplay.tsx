import * as React from "react";

interface Props {
	sprite: any;
}
export default class MainDisplay extends React.Component<Props> {
	render() {
		return (
			<div style={{ ...outerDisplayStyle, ...center }}>
				{/* <div style={dotWrapper}>
					<div style={dot}></div>
					<div style={dot}></div>
				</div> */}
				<div style={innerDisplayStyle}>
					<img src={this.props.sprite} alt="sprite" style={imageStyle} />
				</div>
			</div>
		);
	}
}

const outerDisplayStyle: React.CSSProperties = {
	position:"relative",

	width: "80%",
	maxWidth:"37rem",
	minWidth:"10rem",

	height: "70%",
	maxHeight:"30rem",
	minHeight:"15rem",

	padding:"1.5rem",

	background: "#e7e7e7",
	// border: "2rem solid #e7e7e7",
	borderRadius: "1rem"
};

const innerDisplayStyle: React.CSSProperties = {
	width: "100%",
	height: "100%",
	
	background: "#272727",
	borderRadius: "1rem",
	
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	overflow:"hidden"
};

const imageStyle: React.CSSProperties = {
	width: "70%",
	objectFit: "cover",
	imageRendering: "pixelated",
};

const center: React.CSSProperties = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
};

// const dotWrapper: React.CSSProperties = {
// 	position: "absolute",
// 	top:"0",

// 	width: "100%",
// 	height:"8%",
// 	display:"flex",
// 	justifyContent:"center",
// 	alignItems:"center",

// 	// border:"1px solid blue"
// }
// const dot: React.CSSProperties = {
// 	width: ".5rem",
// 	height: ".5rem",

// 	margin:"0 .5rem",

// 	background:"#dc0a2d",
// 	borderRadius:"50%"
	
// }