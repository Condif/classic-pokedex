import * as React from 'react'
import axios from 'axios'

interface Props {
    placeHolder: string
}

interface State {
    showList: boolean
    pokemonList: Array<any>
}

export default class SearchBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            showList: false,
            pokemonList: ['']
        }
    }

    async componentDidMount() {
        const pokemon = await this.fetchPokeData()
        this.setPokemonInState(pokemon)        
    }

    setPokemonInState(pokemon: Array<any>) {
        const generatePokemon = pokemon.map((val, index) => {
            index++
            return (
            <li key={val.name}>ID: {index}. {val.name}</li>
            )
        })   
        this.setState({
            pokemonList: generatePokemon
        })     
    }

    fetchPokeData = async () => {
        const result = axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
        return (await result).data.results    
    }

    handleOnChange = (e: React.FormEvent) => {
        let target = e.target as HTMLInputElement
        console.log(target.value);
        if (target.value === '') {
            this.setState({
                showList: false
            })
        } else {
            this.checkMatchingPokemonNames(target.value)
            this.setState({
                showList: true
            })
        }
    }

    checkMatchingPokemonNames(value: string) {
        this.state.pokemonList.forEach(pokemon => {
            console.log(pokemon);
            
        });
    }

    render() {
        if (this.state.showList) {
            return (
                <div>
                    <input type="text" placeholder={this.props.placeHolder} onChange={this.handleOnChange} />
                    <ul>
                        {this.state.pokemonList}
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