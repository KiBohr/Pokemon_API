import { useContext, useEffect, useState } from "react";
import { Pokemon } from "../../contracts/interfaces";
import axios from "axios";
import { useParams } from "react-router-dom";
import { mainContext, PokeContext } from "../../context/MainProvider";
import Loading from "../../components/loading/Loading";

//hier wird die komponente für die Detailansicht des einzelenen Pokemons gebaut
const Detail: React.FunctionComponent = () => {
	//hier ist der name des pokemons in useParams gespeichert.
	const { pokeDetailsParam: pokemonName } = useParams();
	// über den useContext werden die Daten vom MainContext weitergegeben und schon typisiert
	const { pokemons: pokemonList } = useContext(mainContext) as PokeContext;
	console.log(pokemonName);

	//die Poke Detailt werden im useState gespeichert und haben den Type Pokemon
	const [pokeDetails, setPokeDetails] = useState<Pokemon>();

	//richtige pokemon raus suchen mit useEffect wir über die PokemonDetails gefetched
	useEffect(() => {
		//durchsuchen der pokemons nach poke namen
		//in currentPokemon wird das gesuchte Pokemon gespeichert und vorher abgeglichen
		const currentPokemon = pokemonList.find(
			(pokemon) => pokemon.name === pokemonName
		);

		const getData = async () => {
			//early return, wenn keine Daten vorhanden sind.
			if (!currentPokemon) {
				return;
			}
			//hier startet der eigentliche fetch über currentPokemon
			try {
				const response = await axios.get(currentPokemon.url);
				//wenn daten erhalten werden, werden diese in setPokeDetails 'verwaltet'
				if (response) {
					setPokeDetails(response.data);
				}
				//überprüfung was an Daten erhaltenwird mit einen Blick in die Console.
				console.log(response.data);
				//Fehler beim Fetchen werden über den catch abgefangen und angezeigt.
			} catch (error) {
				console.warn(error, "hier ist was schief gegangen.");
			}
		};
		getData();
		//Anpassen der Dependencies, damit sich der useEffect daran orientiert.
	}, [pokemonName, pokemonList]);

	//hier wäre platz für eine Ladeanimation
	if (!pokeDetails) {
		return <Loading />;
	}

	return (
		<div className='p-9'>
			<div className='cursor-pointer shadow-2xs flex flex-col items-center justify-center gap-2  bg-linear-to-t from-text-inner to-white rounded-md transition ease-in-out hover:shadow-2xl hover:bg-linear-to-b hover:from-text-inner hover:to-white '>
				<img
					src={pokeDetails.sprites.other["official-artwork"].front_default}
					alt={pokeDetails.name}
				/>
			</div>
			<div className='text-4xl flex justify-evenly'>
				<p>#{pokeDetails.id.toString().padStart(3, "0")}</p>
				<p>{pokeDetails.name.toUpperCase()}</p>
			</div>
			<div>
				{/* <p className=''>{pokeDetails.types.map((entry) => entry.type.name)}</p> */}

				{/* <img src={pokeDetails.sprites.other.showdown.back_shiny} alt='' />
				<img src={pokeDetails.sprites.other.showdown.front_shiny} alt='' /> */}
			</div>
		</div>
	);
};

export default Detail;
