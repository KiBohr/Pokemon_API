import { useContext, useEffect, useState } from "react";
import { Pokemon, PokemonList } from "../../contracts/interfaces";
import axios from "axios";
import { Link } from "react-router-dom";
import { mainContext, PokeContext } from "../../context/MainProvider";
import Loading from "../loading/Loading";

interface Props {
	pokemon: PokemonList;
}

const SingleCard: React.FunctionComponent<Props> = ({ pokemon }) => {
	const [pokeDetails, setPokeDetails] = useState<Pokemon>();

	const { filterType } = useContext(mainContext) as PokeContext;
	// hier müsste noch eine Variable gesetzt werden, in der der ausgewählte Type gespeichert wird
	//wo 'grass' steht

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(pokemon.url);
				if (response) {
					setPokeDetails(response.data);
				}
				console.log(response.data);
			} catch (error) {
				console.warn(error, "error when fetching pokemon.");
			}
		};
		getData();
	}, [pokemon]);

	if (!pokeDetails) {
		//hier wäre noch ein Loadingspinner nice
		return <div className='h-50 w-50 flex items-center justify-center'><Loading/></div>;
	}
	if (
		filterType !== undefined &&
		!pokeDetails.types.some((entry) => entry.type.name === filterType?.name)
	) {
		return;
	}
	return (
		<Link
			to={`detail/${pokemon.name}`}
			className='text-[0.7rem] cursor-pointer shadow-2xs flex flex-col items-center justify-center gap-2  bg-linear-to-t from-text-inner to-white rounded-md transition ease-in-out hover:shadow-2xl hover:bg-linear-to-b hover:from-text-inner hover:to-white '
		>
			<div className='h-45 w-45'>
				<img
					className='object-cover transition ease-in-out hover:drop-shadow-lg'
					src={pokeDetails.sprites.other["official-artwork"].front_shiny}
					alt={pokeDetails.name}
				/>
			</div>
			<div className=' truncate flex px-5 py-1 items-center justify-between bg-white w-[100%]'>
				<p>#{pokeDetails.id.toString().padStart(3, "0")}</p>

				<p className=' uppercase'>{pokeDetails.name}</p>
			</div>
		</Link>
	);
};

export default SingleCard;
