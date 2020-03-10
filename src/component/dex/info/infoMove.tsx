import * as React from "react";
import axios from "axios";
import {
	normal,
	fire,
	water,
	electric,
	grass,
	ice,
	fighting,
	poison,
	ground,
	flying,
	psychic,
	bug,
	rock,
	ghost,
	dragon,
	dark,
	steel,
	fairy
} from "../../css";

interface State {
	name?: string;
	flavor?: string;
	type?: string;
	showFlavor: boolean;
}
interface Props {
	url: string;
}

export default class Move extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			showFlavor: false
		};
	}

	fetchFlavorText = async () => {
		const moveRes: any = await axios.get(this.props.url);

		this.setState({
			name: moveRes.data.name,
			type: moveRes.data.type.name,
			flavor: moveRes.data.flavor_text_entries[2].flavor_text
		});
	};

	toggleFlavor = () => {
		this.setState({
			showFlavor: !this.state.showFlavor
		});
	};

	giveType = (type: any): any => {
		switch (type) {
			case "normal":
				return <div style={{ ...test, ...normal }}></div>;
			case "fire":
				return <div style={{ ...test, ...fire }}></div>;
			case "water":
				return <div style={{ ...test, ...water }}></div>;
			case "electric":
				return <div style={{ ...test, ...electric }}></div>;
			case "grass":
				return <div style={{ ...test, ...grass }}></div>;
			case "ice":
				return <div style={{ ...test, ...ice }}></div>;
			case "fighting":
				return <div style={{ ...test, ...fighting }}></div>;
			case "poison":
				return <div style={{ ...test, ...poison }}></div>;
			case "ground":
				return <div style={{ ...test, ...ground }}></div>;
			case "flying":
				return <div style={{ ...test, ...flying }}></div>;
			case "psychic":
				return <div style={{ ...test, ...psychic }}></div>;
			case "bug":
				return <div style={{ ...test, ...bug }}></div>;
			case "rock":
				return <div style={{ ...test, ...rock }}></div>;
			case "ghost":
				return <div style={{ ...test, ...ghost }}></div>;
			case "dragon":
				return <div style={{ ...test, ...dragon }}></div>;
			case "dark":
				return <div style={{ ...test, ...dark }}></div>;
			case "steel":
				return <div style={{ ...test, ...steel }}></div>;
			case "fairy":
				return <div style={{ ...test, ...fairy }}></div>;
		}
	};

	componentDidMount() {
		this.fetchFlavorText();
	}

	render() {
		const type = this.giveType(this.state.type);

		return (
			<div style={flavorWrapper}>
				<div onClick={this.toggleFlavor} style={flavorStyle}>
					{type}
					<p style={flavorNameStyle}>{this.state.name}</p>
				</div>

				{this.state.showFlavor && (
					<div style={{ ...flavorTextStyle }}>
						<h5 style={typeText}>type : {this.state.type}</h5>
						<p>{this.state.flavor}</p>
					</div>
				)}
			</div>
		);
	}
}

const typeText: React.CSSProperties = {
	fontWeight: "bold",
	marginBottom: "0.2rem",
	textTransform: "uppercase",
	color: "#888"
	};
const test: React.CSSProperties = {

	width: "1rem",
	height: "1rem",
	borderRadius: ".2rem"
};
const flavorWrapper: React.CSSProperties = {
	width: "100%",
	display: "flex",
	justifyContent: "center",
	flexWrap: "wrap"
};

const flavorStyle: React.CSSProperties = {
    margin: ".2rem .5rem",
	width: "100%",
    
    
	fontSize: "1.1rem",
	cursor: "pointer",
    
	display: "flex",
	alignItems: "center"
};


const flavorNameStyle: React.CSSProperties = {
	width: "100%",
	marginLeft:".5rem",
    padding: ".2rem .5rem",
    background: "#333",
    
};

const flavorTextStyle: React.CSSProperties = {
	padding: ".5rem 1rem",
	margin: "0rem .5rem 1rem 1.5rem",

	background: "#333",

	fontSize: ".8rem"
};
