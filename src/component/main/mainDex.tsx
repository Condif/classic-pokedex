import * as React from "react";

import MainDisplay from "./mainDisplay"
import MainID from "./mainID"
import MainNavpad from "./mainNavpad"

export default class MainDex extends React.Component {
	render() {
		return (
            <div>
                <MainDisplay />
                <MainID />
                <MainNavpad />
            </div>
        );
	}
}
