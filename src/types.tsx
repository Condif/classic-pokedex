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

export type TeamPokemons = {
	name: string;
	moves: string[];
	sprite: string;
	types: any[];
	empty?: boolean;
};

export type NavPage = "bio" | "moves";
export type Effect = "super" | "weak";