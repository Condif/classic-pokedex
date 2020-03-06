import * as React from "react";
import { Pokemon } from "../../types";

interface Props {
	pokemon: Pokemon;
}

export default class InfoDisplayMoves extends React.Component<Props> {
    render() {
        const moves: string[] = [];
        const flavorText: string [] = [];
        let movesIndex: number = 0;


        this.props.pokemon.moves?.forEach(move => {
            moves.push(move.move.name);
        });

        this.props.pokemon.movesFlavorText?.forEach(text => {
            flavorText.push(text);
        });
        
        function createFlavorText (i: number) {
                movesIndex ++;
                return  flavorText[i];
        }

        
        return (
            <div style={displayStyle}>
                
                <h1>Moves:</h1>

                <div>{moves.map(movesName => {
                        
                        return (<div>
                                    <ul style ={nameListStyle}>{movesName}
                                        <li style ={flavorTextStyle}>
                                            {createFlavorText(movesIndex)}
                                        </li>
                                    </ul>
                                </div>
                )})}
                </div>
            </div>
        );
    }
}

const displayStyle: React.CSSProperties = {
	background: "#272727",
	color: "#e7e7e7",
	padding: "1rem"
};


const nameListStyle: React.CSSProperties = {
	fontWeight: "bold",
    textTransform: "uppercase",
    listStyleType: "none",
}
const flavorTextStyle: React.CSSProperties = {
	fontWeight: "normal",
	textTransform: "none",
}