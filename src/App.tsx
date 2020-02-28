import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import axios, { AxiosResponse } from "axios";
import Layout from "./component/layout"

interface Sprites {
  front_default: string
}

interface PokemonAPI {
  url: string
}

interface Pokemon {
  name: string
  abilities: Array<any>
  sprites: Sprites
  types: Array<any>
  weight: number
  id: number
}

export default class App extends React.Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    const pokemonArray: Array<Pokemon> = []
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
        const pokemonData = response.data.results.map((p: PokemonAPI) => {
          axios.get(p.url)
          .then((response) => {
            const {name, abilities, sprites, types, weight, id} = response.data
            pokemonArray.push({
              name: name,
              abilities: abilities,
              sprites: sprites.front_default,
              types: types,
              weight: weight,
              id: id
            })
            
            // const pokemonDetails = response.data.map((pokemon: Pokemon) => {
            //   console.log(pokemonDetails);
              
            // // const {name, abilities, sprites, types, weight} = pokemon
            // //   return {
            // //     name: name,
            // //     abilities: abilities,
            // //     frontImg: sprites.front_default,
            // //     types: types,
            // //     weight: weight
            // //   }
            // })
          })
        // console.log(pokemonData);
        // return pokemonData
        })
        console.log(pokemonArray);
        
      })
    // axios
    //     .get("https://pokeapi.co/api/v2/pokemon/")
    //     .then((response) => {
    //       const responseData = response.data
    //       let pokemonList = responseData.results.map((c: pokemon) => {
    //         axios
    //         .get(c.url)
    //         .then((response) => {
    //           let pokemonData = response.data
    //           console.log(pokemonData);
              
    //         })

            // return {
            //   name: c.name,
            //   url: c.url
            // };
        //   })
        //   // console.log(responseData);
        //   // console.log(newPokemons, responseData);
          
        //   const newState = Object.assign({}, this.state, {

        //   });

        //   this.setState(newState);
          
        // })
        // .catch(error => console.log(error))
  }
  render() {
      return (
        <BrowserRouter>
          <Layout/>
        </BrowserRouter>
      );
  }
}
