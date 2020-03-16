import * as React from 'react'
import axios from 'axios'
import SearchResults from './searchResults'
import "../../searchBarStyle.css"

interface PokeData {
    id: number
    name: string
    url: string
}

interface Pokebundle {
    pokeName: Array<PokeData>
    pokeID: Array<PokeData>
}

interface Props {
    placeHolder: string
    searchClick: (searchResult: string) => void;
    isDesktop: boolean;
}

interface State {
    showList: boolean
    showPokemon: {pokeName: any, pokeID: any}
    pokemonList: Array<PokeData>
}

export default class SearchBar extends React.Component<Props, State> {

    _isMounted: boolean = false

    constructor(props: Props) {
        super(props)
        this.state = {
            showList: false,
            showPokemon: {pokeName: [], pokeID: []},
            pokemonList: [{
                id: 0,
                name: '',
                url: ''
            }]
        }
    }

    async componentDidMount() {
        this._isMounted = true
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
        if (this._isMounted) {
            this.setState({
                pokemonList: generatePokemon
            })     
        }
    }

    fetchPokeData = async () => {
        const result = axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
        return (await result).data.results    
    }

    handleOnChange = async(e: React.FormEvent<HTMLInputElement> | HTMLInputElement) => {
        let targetValue = ''
        
        if (e instanceof HTMLInputElement) {
            targetValue = e.value
        } else {
            targetValue = e.currentTarget.value            
        }
        
        if(this._isMounted) {
            if (targetValue === '') {
                this.setState({
                    showList: false
                })
            } else {
                const validPokemon = await this.checkMatchingPokemonNames(targetValue)
                const remappedPokemon = await this.remapPokemon(validPokemon)
                
                this.setState({
                    showList: true,
                    showPokemon: remappedPokemon
                })          
            }        
        }

    }

    async checkMatchingPokemonNames(value: string) {
        let pokeName: Array<PokeData> = []
        let pokeID: Array<PokeData> = []
        this.state.pokemonList.forEach(pokemon => {
            if (pokemon.name.includes(value)) {
                pokeName.push(pokemon)              
            } 
            else if (pokemon.id.toString() === value) {
                pokeID.push(pokemon)
            }
        });
        return {pokeName, pokeID}
    }

    async remapPokemon(pokemon: Pokebundle) {
        const {pokeName: name, pokeID: id} = pokemon
        const pokeName = name.map((val) => <li key={val.name} style={resultListItem} id={val.name} onClick={this.handlePokemonChoice}> ID: {val.id} {val.name}</li>)
        const pokeID = id.map((val) => <li key={val.name} style={resultListItem} id={val.name} onClick={this.handlePokemonChoice}> ID: {val.id} {val.name}</li>)
        return {pokeName, pokeID}
    }

    handlePokemonChoice = (event: any) => {
        const clickedPokemon = event.target.getAttribute('id')
        this.props.searchClick('/'+clickedPokemon)
        this.removeSearchList()
    }

    removeSearchList() {
        const searchBar = document.getElementById('searchField') as HTMLInputElement
        if (searchBar) {
            searchBar.value = ''
            this.handleOnChange(searchBar)
        }        
    }

    componentWillUnmount() {
        this._isMounted = false
    }


    render() {
        return (
            <div className="searchBarContainer">
                <input type="text" id="searchField" className="searchBarInput" placeholder={this.props.placeHolder} onChange={this.handleOnChange}/>
                {(this.state.showList) ? 
                    <> 
                        {(this.state.showPokemon.pokeName.length === 0 && this.state.showPokemon.pokeID.length === 0) ? 
                            <p style={noResult}>No results</p>
                            : null
                        }
                        <div className="searchBarResultList">
                            {(this.state.showPokemon.pokeName.length > 0) ? 
                            <SearchResults title="matching name..." value={this.state.showPokemon.pokeName.length} isDesktop={this.props.isDesktop}>
                                {this.state.showPokemon.pokeName}
                                
                            </SearchResults>
                            : null
                            }
                            {(this.state.showPokemon.pokeID.length > 0) ?
                            <SearchResults title="matching ID... " isDesktop={this.props.isDesktop}>
                                {this.state.showPokemon.pokeID}
                            </SearchResults>
                            : null
                            }
                        </div>
                    </>
                : null
                }
            </div>
        )
    }
}



const resultListItem: React.CSSProperties = {
    margin: '.1rem .5rem .4rem .5rem',
    padding: '.3rem 0 .3rem .8rem',
    borderRadius: '.5rem',
    backgroundColor: '#212121E6',

    cursor: 'pointer'
}

const noResult: React.CSSProperties = {
    margin: '3rem 0 0 0',
    padding: '.3rem 0 .3rem .8rem',
    borderRadius: '.5rem',

    color:"#e7e7e7",
    backgroundColor: '#212121',

}

