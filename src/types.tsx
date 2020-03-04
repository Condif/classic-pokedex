export type buttonName = 'bio' | 'moves' |'back'

export type Pokemon = {
    id?: number,
    name?: string,
    sprites?: string,
    height?: string,
    weight?: string,
    types?: any[],
    abilities?: string[],
    moves?: any[],
    pokemonBio?: string,
    movesFlavorText?: [],
    
    
}