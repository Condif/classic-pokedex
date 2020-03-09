import * as React from 'react'
import axios from 'axios'
import SearchResults from './searchResults'

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
}

interface State {
    showList: boolean
    showPokemon: {pokeName: any, pokeID: any}
    pokemonList: Array<PokeData>
}

export default class SearchBar extends React.Component<Props, State> {
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

    handleOnChange = async(e: React.FormEvent<HTMLInputElement> | HTMLInputElement) => {
        let targetValue = ''
        
        if (e instanceof HTMLInputElement) {
            targetValue = e.value
        } else {
            targetValue = e.currentTarget.value            
        }
        
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


    render() {
        return (
            <div style={searchBarContainer}>
                <input type="text" id="searchField" style={searchBarInput} placeholder={this.props.placeHolder} onChange={this.handleOnChange}/>
                {(this.state.showList) ? 
                    <> 
                        {(this.state.showPokemon.pokeName.length === 0 && this.state.showPokemon.pokeID.length === 0) ? 
                            <p style={noResult}>No results</p>
                            : null
                        }
                        <div style={searchBarResultList}>
                            {(this.state.showPokemon.pokeName.length > 0) ? 
                            <SearchResults title="matching name..." value={this.state.showPokemon.pokeName.length}>
                                {this.state.showPokemon.pokeName}
                            </SearchResults>
                            : null
                            }
                            {(this.state.showPokemon.pokeID.length > 0) ?
                            <SearchResults title="matching ID... ">
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

const searchBarContainer: React.CSSProperties = {
    position: 'absolute',
    zIndex: 1,
    top: '.5rem',
    bottom: '.5rem',
    
    width: '90%',
    maxHeight: '30rem',
    minHeight: '15rem',
    overflow: 'hidden',
}

const searchBarInput: React.CSSProperties = {
    position: 'absolute',
    top: '0%',
    left: '50%',
    transform: 'translateX(-50%)',

    width: '80%',
    height: '1.5rem',
    padding: '1rem',

    fontSize: '1.2rem',
    color: '#E7E7E7',

    backgroundColor: '#212121',
    border: '1px solid #171717',
    borderRadius: '1rem',
}

const searchBarResultList: React.CSSProperties = {
    position: 'absolute',
    top: '2.4rem',
    left: '0rem',
    right: '0rem',
    bottom: '0rem',

    overflowY: 'auto',
    overflowX: 'hidden',
    backgroundColor: '#272727B3',
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

