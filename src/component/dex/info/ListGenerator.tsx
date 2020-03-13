import * as React from "react";
// import axios from "axios";
import ListItem from "./ListItem";

interface State {
	listItems: any
}
interface Props {
	listItems?: any
	nameStyle: React.CSSProperties
	textStyle: React.CSSProperties
}

export default class ListGenerator extends React.Component<Props, State> {
	newList: any

	constructor(props: Props) {
		super(props);
		this.newList = this.generateNewList()
		
		this.state = {
			listItems: this.newList
		};
	}

	generateNewList() {
		let newList: any = []
		if (this.props.listItems) {
			this.props.listItems.forEach((item: any) => {
				let listItem
				if(item.ability) {
					listItem = {
					name: item.ability.name,
					url: item.ability.url
					}
				} else if (item.move) {					
					listItem = {
						name: item.move.name,
						url: item.move.url,
						move: true
					}
				}
				newList.push(listItem)
			})
		} else {
			newList = [{
				name: "Couldn't fetch info...",
				url: "empty"
			}]
		}
		return newList
	}

	componentDidUpdate(prevProps: Props) {
		if (prevProps.listItems !== this.props.listItems) {
			const newList = this.generateNewList()
			this.setState({
				listItems: newList
			})
		}
	}

	render() {

		return (
			<div>
				{(this.state.listItems) 
				? this.state.listItems.map((item: any) => (
					<ListItem move={item.move} url={item.url} key={item.name} name={item.name} textStyle={this.props.textStyle} nameStyle={this.props.nameStyle}/>
				))
				: <p>couldn't fetch data...</p>
				}	
			</div>
		);
	}
}


