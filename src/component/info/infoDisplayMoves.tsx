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
                
                <p>Moves:</p>

                <div>{moves.map(movesName => {
                        
                        return (<ul style={moveUlStyle}>
                                    <li style ={nameListStyle}>{movesName}
                                        <li style ={flavorTextStyle}>
                                            {createFlavorText(movesIndex)}
                                        </li>
                                    </li>
                                </ul>
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

const moveUlStyle: React.CSSProperties = {
	listStyleType: "none",
}

const nameListStyle: React.CSSProperties = {
	fontWeight: "bold",
	textTransform: "uppercase",
}
const flavorTextStyle: React.CSSProperties = {
	fontWeight: "normal",
	textTransform: "none",
}