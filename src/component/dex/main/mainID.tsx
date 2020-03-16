import * as React from "react";
import "../../mainIdStyle.css"

interface Props {
	id: number | undefined
}
export default class MainID extends React.Component<Props> {

	render() {
		const id = this.props.id
		return (
			<div className="IdStyle">
				<p className="absoluteText">ID</p>
				{(id !== undefined && id < 10) && 
					<p className="idText">00{this.props.id}</p> 
				}
				{(id !== undefined && id >= 10 && id < 100) && 
					<p className="idText">0{this.props.id}</p> 
				}
				{(id !== undefined && id >= 100) && 
					<p className="idText">{this.props.id}</p> 
				}
			</div>
		);
	}
}