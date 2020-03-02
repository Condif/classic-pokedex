import * as React from "react";

interface Props {
	sprite: any;
}
export default class MainDisplay extends React.Component<Props> {
	render() {
		return (
			<div style={{ ...outerDisplayStyle, ...center }}>
				<div style={innerDisplayStyle}>
					<img src={this.props.sprite} alt="sprite" style={imageStyle} />
				</div>
			</div>
		);
	}
}

const outerDisplayStyle: React.CSSProperties = {
	width: "80%",
	height: "50%",

	background: "#e7e7e7",
	// border: "2rem solid #e7e7e7",
	borderRadius: "1rem"
};

const innerDisplayStyle: React.CSSProperties = {
	width: "80%",
	height: "70%",
	
	background: "#272727",
	borderRadius: "1rem",
	
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
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
