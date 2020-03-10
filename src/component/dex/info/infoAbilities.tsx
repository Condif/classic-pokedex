import * as React from "react";
import axios from "axios";

interface State {
	name?: string;
	flavor?: string;
	showFlavor: boolean;
}
interface Props {
	url: string;
}

export default class Abilities extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			showFlavor: false
		};
	}

	fetchFlavorText = async () => {
		const abRes: any = await axios.get(this.props.url);

		this.setState({
			name: abRes.data.name,
			flavor: abRes.data.flavor_text_entries[2].flavor_text
		});
	};

	toggleFlavor = () => {
		this.setState({
            showFlavor: !this.state.showFlavor
        })
	};

	componentDidMount() {
		this.fetchFlavorText();
	}

	render() {

		return (
			<div style={flavorWrapper}>
				<h4 onClick={this.toggleFlavor} style={flavorNameStyle}>
					{this.state.name}
				</h4>
				{this.state.showFlavor && (
					<p style={flavorTextStyle}>{this.state.flavor}</p>
				)}
			</div>
		);
	}
}



const flavorWrapper: React.CSSProperties = {
    width:"100%",
};

const flavorNameStyle: React.CSSProperties = {
    margin:".2rem 0",
    padding:".2rem 1rem",

    background:"#333",
    borderLeft:".2rem solid #e7e7e7",

    fontSize: "1.1rem",
    cursor:"pointer"
};
const flavorTextStyle: React.CSSProperties = {
    padding: ".5rem 1rem",
    margin:"0 0 .5rem 1rem",

    background:"#333",

	fontSize: ".8rem"
};
