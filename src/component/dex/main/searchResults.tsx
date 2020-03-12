import * as React from 'react'
import "../../searchResultsStyle.css"

interface Props {
    title: string
    value?: number
    isDesktop: boolean;
}

interface State { }

export default class SearchResults extends React.Component<Props, State> {

    render() {
        return (
            <div>
                <div className="searchResultTitle">
                    <p>{this.props.title}</p>
                    {(this.props.value && this.props.value >= 5) ? <p>{this.props.value} entries</p> : null}
                </div>
                <ul className="searchResultUL">
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

