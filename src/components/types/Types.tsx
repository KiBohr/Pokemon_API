import { useContext, useEffect, useState } from "react";
import { IType, ITypeDetails } from "../../contracts/interfaces";
import axios from "axios";
import { mainContext, PokeContext } from "../../context/MainProvider";

interface TypeProps {
	type: IType;
	closeOnClick: () => void;
}

const Types: React.FunctionComponent<TypeProps> = ({ type, closeOnClick }) => {
	// usestate für die types
	const [pokeTypeDetails, setPokeTypeDetails] = useState<ITypeDetails>();

	const { setFilterType } = useContext(mainContext) as PokeContext;

	//useEffect zum fetchen der detailDaten
	useEffect(() => {
		const getData = async () => {
			try {
				const resp = await axios.get(type.url);
				if (resp) {
					setPokeTypeDetails(resp.data);
				}
				console.log(resp.data);
			} catch (err) {
				console.warn(`problem while fetching TypeDetails`, err);
			}
		};
		getData();
	}, [type]);

	const handleButtonClick = () => {
		setFilterType(type);
		closeOnClick();
	};

	return (
		<>
			<button
				className={`rounded-full cursor-pointer transition ease-in-out hover:drop-shadow-2xl hover:opacity-70`}
				onClick={handleButtonClick}
			>
				<img
					src={
						pokeTypeDetails?.sprites["generation-ix"]["scarlet-violet"]
							.name_icon
					}
					alt={pokeTypeDetails?.name}
				/>
			</button>
		</>
	);
};

export default Types;
