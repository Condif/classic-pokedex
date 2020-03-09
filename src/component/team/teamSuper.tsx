import * as React from "react"

interface Props {}
interface State {}

export default class TeamSuper extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render () {
        return(
            <p>weak</p>
        )
    }
}