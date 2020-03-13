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
};


export type NavPage = "bio" | "moves"