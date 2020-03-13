import React from 'react'
import Axios from 'axios'
import {
	normal,
	fire,
	water,
	electric,
	grass,
	ice,
	fighting,
	poison,
	ground,
	flying,
	psychic,
	bug,
	rock,
	ghost,
	dragon,
	dark,
	steel,
	fairy
} from "../../css";

interface Props {
    url: string
    name: string
    move?: boolean
    nameStyle: React.CSSProperties
    textStyle: React.CSSProperties
}

interface State {
    showFlavor: boolean
    firstFetch: boolean
    data?: any
}

export default class ListItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            showFlavor: false,
            firstFetch: true,
            data: {
                flavor: 'loading text...'
            }
        }
    }

    giveType = (): any => {
		switch (this.state.data.type) {
			case "normal":
                return { ...typeBox, ...normal };
            case "fire":
                return { ...typeBox, ...fire };
            case "water":
                return { ...typeBox, ...water };
            case "electric":
                return { ...typeBox, ...electric };
            case "grass":
                return { ...typeBox, ...grass };
            case "ice":
                return { ...typeBox, ...ice };
            case "fighting":
                return { ...typeBox, ...fighting };
            case "poison":
                return { ...typeBox, ...poison };
            case "ground":
                return { ...typeBox, ...ground };
            case "flying":
                return { ...typeBox, ...flying };
            case "psychic":
                return { ...typeBox, ...psychic };
            case "bug":
                return { ...typeBox, ...bug };
            case "rock":
                return { ...typeBox, ...rock };
            case "ghost":
                return { ...typeBox, ...ghost };
            case "dragon":
                return { ...typeBox, ...dragon };
            case "dark":
                return { ...typeBox, ...dark };
            case "steel":
                return { ...typeBox, ...steel };
            case "fairy":
                return { ...typeBox, ...steel };
			}
	};

    async fetchItemInfo() {
        try {
            const result = await Axios.get(this.props.url)
            
            if (this.props.move) {
                return {
                    flavor: result.data.flavor_text_entries[2].flavor_text,
                    type: result.data.type.name,
                    effect: result.data.damage_class.name,
                    power: result.data.power,
                    pp: result.data.pp
                }
            } else {
                return {
                    flavor: result.data.flavor_text_entries[2].flavor_text
                }
            }
        } catch {
            return {
                flavor: "couldn't find data..."
            } 
        }
    }
    
    handleListClick = () => {
        this.setState({
            showFlavor: !this.state.showFlavor,
        })
    }

    async loadFlavorText(){
        if (this.state.firstFetch) {
            const info = await this.fetchItemInfo()            
            this.setState({
                firstFetch: false,
                data: info
            })
        }
    }

    componentDidMount() {    
        this.loadFlavorText()
    }

    componentDidUpdate(prevProps: Props) {
        if(prevProps.url !== this.props.url) {
            this.loadFlavorText()
        }
    }

    render() {
        return (
            <div style={wrapper}>
                <div style={titleWrapper} onClick={this.handleListClick}>
                    {(this.props.move) 
                        ? <div style={this.giveType()}></div>
                        : null
                    }
                    <p key={this.props.name} style={this.props.nameStyle} >
                        {this.props.name}
        			</p>
                </div>
                {(this.state.showFlavor) 
                ?   <>
                    {(this.props.move)
                    ?   <div style={typeStyle}>
                        <p>Type: {this.state.data.type}</p> 
                        <p>{this.state.data.effect} {this.state.data.power}</p> 
                        <p>PP: {this.state.data.pp}</p>
                        </div>
                    :   null
                    }
                    <p style={this.props.textStyle}>{this.state.data.flavor}</p>    
                    </>
                :   null
                }
            </div> 
        )
    }
}

const titleWrapper: React.CSSProperties = {
    width: "100%"
}

const typeStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgb(51, 51, 51)",
    color: "#bfbfbf",
    margin: "0 .5rem 0 0",
    padding: ".2rem 1rem .2rem 1rem",
    fontSize: ".8rem",
    textTransform: "uppercase"
}

const typeBox: React.CSSProperties = {
    position: "absolute",
    top: ".3rem",
    left: ".3rem",
    width: "1.2rem",
	height: "1.2rem",
    borderRadius: ".2rem",
}

const wrapper: React.CSSProperties = {
    position: 'relative',
    width: '100%',
}