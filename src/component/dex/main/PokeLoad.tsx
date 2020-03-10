import * as React from 'react'
import Pokeload from '../../../assets/pokeball-sprite.png'

export default class PokeLoad extends React.Component {
    render() {
        return (
            <div style={loadWrapper}>
                <img src={Pokeload} alt="pokeball-sprite"/>
                <p>...loading</p>
            </div>
        )
    }
}

const loadWrapper: React.CSSProperties = {
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '100%',
    backgroundColor: '#00000080',

    color: '#E7E7E780'
}