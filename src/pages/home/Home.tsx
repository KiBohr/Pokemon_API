import { useContext, useState } from "react";
import { mainContext, PokeContext } from "../../context/MainProvider";
import { PokemonList } from "../../contracts/interfaces";
import SingleCard from "../../components/singleCard/SingleCard";
import Loading from "../../components/loading/Loading";

// ! Typisierung?? Was ist hier los??

const Home = () => {
	const { pokemons, setPokemons } = useContext(mainContext) as PokeContext;
	//useState für zwischenspeicher der input eingabe und zugriff drauf
	const [filterInput, setFilterInput] = useState("");

	return (
		<>
			{/* todo styling */}
			{/* neues input feld, damit es leicter wird  anzuzeigen */}
			<input
				type='text'
				value={filterInput}
				onChange={(event) => setFilterInput(event.target.value)}
				className='border-2'
			/>
			{!pokemons && <Loading />}
			<div className='grid grid-cols-2 gap-5 mx-5 my-10 sm:grid-cols-3 md:grid-cols-4 md:mx-10 lg:grid-cols-5 lg:mx-20 lg:gap-10'>
				{pokemons
					// filter welche pokemon beim map verwendet werden sollen.
					// filter gibt ein array zurück
					.filter((pokemon) => pokemon.name.includes(filterInput))
					.map((pokemon: PokemonList) => {
						return (
							<SingleCard pokemon={pokemon} key={pokemon.name + pokemon.url} />
						);
					})}
			</div>
		</>
	);
};

export default Home;
