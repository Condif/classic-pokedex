import * as React from 'react'

interface Props {
    image: string
}

export default class PokeSprite extends React.Component<Props> {

    render() {
        return (
            <img src={this.props.image} alt='' style={imageStyle} />
        )
    }
}

const imageStyle: React.CSSProperties = {
	width: "75%",
	objectFit: "cover",
	imageRendering: "pixelated"
};