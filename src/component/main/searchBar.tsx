import * as React from 'react'
import axios from 'axios'

interface PokeData {
    id: number
    name: string
    url: string
}

interface Props {
    placeHolder: string
}

interface State {
    showList: boolean
    showPokemon: Array<any>
    pokemonList: Array<PokeData>
}

export default class SearchBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            showList: false,
            showPokemon: [],
            pokemonList: [{
                id: 0,
                name: '',
                url: ''
            }]
        }
    }

    async componentDidMount() {
        const pokemon = await this.fetchPokeData()
        this.setPokemonInState(pokemon)        
    }

    setPokemonInState(pokemon: Array<any>) {
        const generatePokemon = pokemon.map((val, index) => {
            index++
            return ({
                id: index,
                name: val.name,
                url: val.url,
            })
        })   
        this.setState({
            pokemonList: generatePokemon
        })     
    }

    fetchPokeData = async () => {
        const result = axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
        return (await result).data.results    
    }

    handleOnChange = async(e: React.FormEvent) => {
        let target = e.target as HTMLInputElement
        console.log(target.value);
        if (target.value === '') {
            this.setState({
                showList: false
            })
        } else {
            const validPokemon = await this.checkMatchingPokemonNames(target.value)
            this.setState({
                showList: true,
                showPokemon: validPokemon
            })
            console.log(this.state.showPokemon);
            
        }
    }

    async checkMatchingPokemonNames(value: string) {
        let validPokemon: Array<PokeData> = []
        this.state.pokemonList.forEach(pokemon => {
            if (pokemon.name.includes(value)) {
                validPokemon.push(pokemon)              
            }
        });
        return validPokemon
    }

    render() {
        if (this.state.showList) {
            return (
                <div>
                    <input type="text" placeholder={this.props.placeHolder} onChange={this.handleOnChange} />
                    <ul>
                        <p>Show list</p>
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <input type="text" placeholder={this.props.placeHolder} onChange={this.handleOnChange} />
                </div>
            )
        }
    }
}