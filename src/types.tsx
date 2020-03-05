export type Pokemon = {
    id?: number,
    name?: string,
    sprites?: string,
    height: number,
    weight: number,
    types?: any[],
    abilities?: any[],
    moves?: {
        name: string,
        type: string
    },
    pokemonBio?: string,
    
    
}