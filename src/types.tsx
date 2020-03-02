export type buttonName = 'bio' | 'moves' |'back'

export type Pokemon = {
    id?: number,
    name?: string,
    sprites?: string,
    height?: string,
    weight?: string,
    types?: any[],
    abilities?: string[],
    moves?: {
        name: string,
        type: string
    }
    bio?: string
}