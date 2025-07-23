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

	// console.log(pokemonName);

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

	// here object with type-colouring info
	const typeColors: Record<
		"bug" | "dark" | "dragon" | "electric" | "fairy" | "fighting" | "fire" | "flying" | "ghost" | "grass" | "ground" | "ice" | "normal" | "poison" | "psychic" | "rock" | "steel" | "water",
		string
	> = {
		bug: "text-bug",
		dark: "text-dark",
		dragon: "text-dragon",
		electric: "text-electric",
		fairy: "text-fairy", 
		fighting: "text-fighting",
		fire: "text-fire",
		flying: "text-flying",
		ghost: "text-ghost",
		grass: "text-grass",
		ground: "text-ground",
		ice: "text-ice",
		normal: "text-normal",
		poison: "text-poison",
		psychic: "text-psychic",
		rock: "text-rock",
		steel: "text-steel",
		water: "text-water"
	}

	return (
		<div className='p-9'>
			<div className='cursor-pointer shadow-2xs flex flex-col items-center justify-center gap-2  bg-linear-to-t from-text-outer to-white rounded-t-full h-80 transition ease-in-out hover:shadow-2xl'>
				<img className="mb-5 transition ease-in-out hover:animate-wiggle"
					src={pokeDetails.sprites.other["official-artwork"].front_default}
					alt={pokeDetails.name}
				/>
			</div>
			<div className='sm:text-2xl md:text-3xl lg:text-4xl flex justify-evenly bg-white p-5 '>
				<p>#{pokeDetails.id.toString().padStart(3, "0")}</p>
				<p className="break-all">{pokeDetails.name.toUpperCase()}</p>
			</div>

			<div className="bg-white p-5 my-5 flex items-center justify-evenly text-[0.6rem] md:text-sm transition ease-in-out hover:shadow-2xl">
					<div className="flex flex-col gap-2 items-center">
						<img className="md:h-40" src={pokeDetails.sprites.other.showdown.front_default} alt='' />
						<p className="">front</p>
					</div>
					<div className="flex flex-col items-center gap-2 ">
						<img className="md:h-40" src={pokeDetails.sprites.other.showdown.back_default} alt='' />
						<p>back</p>
					</div>
			</div>

			<div className="bg-white p-5 my-5 flex items-center rounded-b-xl justify-between transition ease-in-out hover:shadow-2xl">
					<p className="">
						{pokeDetails.types.length === 1 
						? "Type:"
						: "Types:"}
					</p>
					<div>
						{pokeDetails.types.map((entry, index) => (
							 <span
							 key={index}
							 className={`px-2 py-1 text-sm font-bold ${
								// doesnt like it but it works 
								typeColors[entry.type.name.toLowerCase() as keyof typeof typeColors]

							 }`}
						   >
							 {entry.type.name}
						   </span>
						
						))}
					</div>
			</div>
		</div>
	);
};

export default Detail;
