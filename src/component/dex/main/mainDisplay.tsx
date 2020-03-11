import React, { Suspense } from "react";
import PokeLoad from '../PokeLoad'
import "../../mainDisplayStyle.css"

const PokeSprite = React.lazy(() =>
import ('./PokeSprite'))
interface Props {
	sprite: any;
	name: any;
	weight: any;
	height: any;
	isDesktop: boolean;
}

export default class MainDisplay extends React.Component<Props> {
	render() {
		return (
			<div className={`outerDisplayStyle ${this.props.isDesktop ? "" : "mobile"}`}>
				<div className={`innerDisplayStyle ${this.props.isDesktop ? "" : "mobile"}`}>
					<Suspense fallback={
						<PokeLoad />
					}>
						{this.props.children}
						<PokeSprite image={this.props.name} />
					</Suspense>
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

// const imageStyle: React.CSSProperties = {
// 	width: "65%",
// 	objectFit: "cover",
// 	imageRendering: "pixelated"
// };

