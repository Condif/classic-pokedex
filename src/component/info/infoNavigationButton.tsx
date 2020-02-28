import * as React from "react";
import { buttonName } from "../../types";


interface Props {
    buttonName: buttonName
}

export default class InfoDisplay extends React.Component<Props> {
    
    render() {

		return (
            <div>
                {this.props.buttonName}
            </div>
        );
	}
}
