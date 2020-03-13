import React from 'react'
import Axios from 'axios'

interface Props {
    pokeName?: string
}

interface State {
    isLoading: boolean
    bio: string
}

interface Result {
    data: {
        flavor_text_entries: [
            {
                flavor_text: string,
                language: {
                    name: string
                }
            }
        ]
    }
}

export default class GenerateBio extends React.Component<Props, State> {

    constructor(props:Props){
        super(props)
        this.state = {
            isLoading: true,
            bio: 'loading pokemon bio...',
        }
    }

    async fetchPokeBio() {
        const speciesBio: Result = await Axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.props.pokeName}`)
        return speciesBio.data
        
    }

    async loadPokeBio() {
        this.setLoading(true)
        let bio = ''
        try {
            const data = await this.fetchPokeBio()
            const flavor = data.flavor_text_entries
            flavor.some((bioText: any) => {
                if (
                    bioText !== undefined &&
                    bioText !== null &&
                    bioText.language.name === "en"
                ) {
                    bio = bioText.flavor_text
                    return bio
                } 
            })
        } catch (error) {
            console.log(error);
            
            bio = "couldn't find pokemon..."
            return bio
        }
        return bio
    }

    async componentDidMount() {
        const pokeBio = await this.loadPokeBio()
        this.setLoading(false)
        this.setState({
            bio: pokeBio
        })
        
    }

    setLoading(value: boolean) {
        this.setState({
            isLoading: value
        })
    }

    async componentDidUpdate(prevProps: Props) {
        if(prevProps.pokeName !== this.props.pokeName) {
            const pokeBio = await this.loadPokeBio()
            this.setLoading(false)
            this.setState({
                bio: pokeBio
            })
        }
    }

    render() {
        return (
            <>
            {(this.state.isLoading) 
            ? <p>Loading pokemon information...</p>
            : <p>{this.state.bio}</p>
            }
            </>
        )
    }
}