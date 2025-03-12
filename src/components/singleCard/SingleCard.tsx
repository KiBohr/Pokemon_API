import { useEffect, useState } from "react";
import { Pokemon, PokemonList } from "../../contracts/interfaces";
import axios from "axios";

interface Props {
	pokemon: PokemonList;
}

const SingleCard: React.FunctionComponent<Props> = ({ pokemon }) => {
	const [pokeDetails, setPokeDetails] = useState<Pokemon>();

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(pokemon.url);
				if (response) {
					setPokeDetails(response.data);
				}
				console.log(response.data);
			} catch (error) {
				console.warn(error, "hier ist was schief gegangen.");
			}
		};
		getData();
	}, [pokemon]);

	if (!pokeDetails) {
		return <div>loading</div>;
	}
	return (
		<div>
			<h1>{pokeDetails.name}</h1>
			<img src={pokeDetails.sprites.front_shiny} alt='' />
		</div>
	);
};

export default SingleCard;
