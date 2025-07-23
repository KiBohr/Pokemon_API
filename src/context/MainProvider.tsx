import { createContext, useEffect, useState } from "react";
import { IType, PokemonList } from "../contracts/interfaces";
import axios from "axios";

export interface PokeContext {
	pokemons: PokemonList[];
	setPokemons: (list: PokemonList[]) => void;
	dark: boolean;
	setDark: (value: boolean) => void;
	pokeTypes: IType[];
	setPokeTypes: (list: IType[]) => void;
	filterType: IType | undefined;
	setFilterType: (value: IType) => void;
}

export const mainContext = createContext<PokeContext | null>(null);

const MainProvider = ({ children }: { children: React.ReactNode }) => {
	const [pokemons, setPokemons] = useState<PokemonList[]>([]);

	const [dark, setDark] = useState<boolean>(false);

	// usestate für den types-fetch
	const [pokeTypes, setPokeTypes] = useState<IType[]>([]);

	//useState für PokeType
	const [filterType, setFilterType] = useState<IType | undefined>();

	// fetch von den Types
	useEffect(() => {
		const getData = async () => {
			try {
				const resp = await axios.get(`https://pokeapi.co/api/v2/type`);

				if (resp) {
					setPokeTypes(resp.data.results);
					// console.log("Types", resp.data.results);
				}
			} catch (err) {
				console.warn(`something went wrong fetching TYPES`, err);
			}
		};
		getData();
	}, []);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(
					"https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
				);
				if (response) {
					setPokemons(response.data.results);
				}
			} catch (error) {
				console.warn(error, "hier ist was schief gegangen.");
			}
		};
		getData();
	}, []);

	return (
		<mainContext.Provider
			value={{
				pokemons,
				setPokemons,
				dark,
				setDark,
				pokeTypes,
				setPokeTypes,
				filterType,
				setFilterType,
			}}
		>
			{children}
		</mainContext.Provider>
	);
};

export default MainProvider;
