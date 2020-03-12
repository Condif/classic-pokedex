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
                <div style={searchResultTitle}>
                    <p>{this.props.title}</p>
                    {(this.props.value && this.props.value >= 5) ? <p>{this.props.value} entries</p> : null}
                </div>
                <ul className={`searchResultUL ${this.props.isDesktop ? "" : "mobile"}`}>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

const searchResultTitle: React.CSSProperties = {
    margin: '.3rem 0 .2rem 0',

    display: 'flex',
    justifyContent: 'space-evenly',
    color: '#d1d1d1',
}

const searchResultUL: React.CSSProperties = {
    listStyle: 'none',
    color: '#E7E7E7',
    fontSize: '1.2rem'
}