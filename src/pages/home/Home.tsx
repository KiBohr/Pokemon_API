import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import { Pokemon, PokemonList } from "../../contracts/interfaces";
import SingleCard from "../../components/singleCard/SingleCard";

// ! Typisierung?? Was ist hier los??

const Home = () => {
	const { pokemons, setPokemons } = useContext(mainContext) as any;

	return (
		<div className="grid grid-cols-2 gap-5 mx-5 my-10">
			{pokemons.map((pokemon: PokemonList) => {
				return (
					<SingleCard pokemon={pokemon} key={pokemon.name + pokemon.url} />
				);
			})}
		</div>
	);
};

export default Home;
