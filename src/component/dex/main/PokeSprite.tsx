import * as React from 'react'
import Axios from 'axios'
import Pokeball from '../../../assets/pokeball-sprite.png'
import MissingNo from '../../../assets/missingno-sprite.png'

interface Props {
    image: string
}

interface State {
    img: any
    isLoading: boolean
    isError: boolean
}

export default class PokeSprite extends React.Component<Props, State> {

    _isMounted: boolean = false

    constructor(props: Props) {
        super(props)
        this.state = {
            img: (<img alt=''></img>),
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        if (this.props.image !== undefined) {
            this.loadImage()
        }
    }

    async loadImage() {
        if (this._isMounted) {
            this.setState({
                isLoading: true
            })
        }
        
        const image = new Image()
        image.onload = () => {
            if (this._isMounted) {
                this.setState({
                    isLoading: false
                })
            }
        }
        try {
                this._isMounted = true
                const pokemon = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.image}`)
                image.src = pokemon.data.sprites.front_default
                if (this._isMounted) {
                    this.setState({
                        img: image,
                        isError: false
                    })
                }
            } catch (error) {
                if (this._isMounted) {
                    this.setState({
                        isError: true
                    })
                }
                
            }
        }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.image !== this.props.image) {
            this.loadImage()
            
        }
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        return (
            <>
                {(this.state.isLoading && !this.state.isError) ? <img src={Pokeball} alt=""/>
                : <img src={this.state.img.src} alt='' style={imageStyle} />
                }
                {(this.state.isError) ? 
                <>
                    <img src={MissingNo} alt="" />
                    {/* <p>Couldn't find pokemon...</p> */}
                </>
                : null}
            </>
        )
    }
}
 
const imageStyle: React.CSSProperties = {
	width: "75%",
	objectFit: "cover",
	imageRendering: "pixelated"
};