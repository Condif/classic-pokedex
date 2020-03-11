export type Pokemon = {
	id?: number;
	name?: string;
	sprites?: string;
	height: number;
	weight: number;
	types?: any[];
	abilities?: any[];
	moves?: any[];
	pokemonBio?: string;
	movesFlavorText?: any[];
};

export type myPokemon = {
	name: string,
	moves: string[]
	sprite: string,
	types: any[]
}

export type NavPage = "bio" | "moves"
