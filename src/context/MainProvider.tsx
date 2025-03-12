import { createContext, useEffect, useState } from "react";
import { PokemonList } from "../contracts/interfaces";
import axios from "axios";

export interface PokeContext {
	pokemons: PokemonList[];
	setPokemons: (list: PokemonList[]) => void;
	dark: boolean;
	setDark: (value: boolean) => void;
}

export const mainContext = createContext<PokeContext | null>(null);

const MainProvider = ({ children }: { children: React.ReactNode }) => {
	const [pokemons, setPokemons] = useState<PokemonList[]>([]);

	const [dark, setDark] = useState<boolean>(false);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(
					"https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
				);
				if (response) {
					setPokemons(response.data.results);
				}
				console.log(response.data.results);
			} catch (error) {
				console.warn(error, "hier ist was schief gegangen.");
			}
		};
		getData();
	}, []);

	console.log("poke:", pokemons);

	useEffect(() => {
		const getSinglePokemonData = async () => {};
	});

	return (
		<mainContext.Provider value={{ pokemons, setPokemons, dark, setDark }}>
			{children}
		</mainContext.Provider>
	);
};

export default MainProvider;
