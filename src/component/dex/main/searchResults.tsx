import * as React from 'react'
import { ReactComponent } from '*.svg'

interface Props {
    title: string
    value?: number
}

interface State { }

export default class SearchResults extends React.Component<Props, State> {
    constructor(props: Props){
        super(props)
    }

    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                {(this.props.value && this.props.value >= 5) ? <h3>{this.props.value}</h3> : null}
                <ul>
                    {this.props.children}
                </ul>
            </>
        )
    }
}