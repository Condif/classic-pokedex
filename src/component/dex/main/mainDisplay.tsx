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
			<div className="outerDisplayStyle">
				<div className="innerDisplayStyle">
					<Suspense fallback={
						<PokeLoad />
					}>
						{this.props.children}
						<PokeSprite image={this.props.name} />
					</Suspense>
					<h2 className="nameStyle">{this.props.name}</h2>
					<div className="whWrapperStyle">
						<p className="whStyle">{"height "}</p>
						<p className="whValueStyle">{this.props.height / 10}&nbsp;m</p>
						<p className="whStyle">weight</p>
						<p className="whValueStyle">{this.props.weight / 10}&nbsp;kg</p>
					</div>
				</div>
			</div>

		);
	}
}


