import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import { Pokemon, PokemonList } from "../../contracts/interfaces";
import SingleCard from "../../components/singleCard/SingleCard";
import Loading from "../../components/loading/Loading";

// ! Typisierung?? Was ist hier los??

const Home = () => {
	const { pokemons, setPokemons } = useContext(mainContext) as any;

	return ( 
		<>
		{!pokemons && <Loading/>}
		<div className="grid grid-cols-2 gap-5 mx-5 my-10 sm:grid-cols-3 md:grid-cols-4 md:mx-10 lg:grid-cols-5 lg:mx-20 lg:gap-10">
			{pokemons.map((pokemon: PokemonList) => {
				return (
					<SingleCard pokemon={pokemon} key={pokemon.name + pokemon.url} />
				);
			})}
		</div>
		</>
	);
};

export default Home;
