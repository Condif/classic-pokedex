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

export type TeamPokemons = string[];
export type NavPage = "bio" | "moves";
export type Effect = "super" | "weak";
export type Type = {
	name: string;
	url: string;
};
