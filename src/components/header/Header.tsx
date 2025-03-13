import { useContext, useState } from "react";
import BurgerButton from "./BurgerButton";
import { Drawer } from "./Drawer";
import { PokeContext, mainContext } from "../../context/MainProvider";
import Types from "../types/Types";

interface IHeaderProps {}


const Header: React.FunctionComponent<IHeaderProps> = () => {
	const [open, setOpen] = useState(false);

	const { dark, setDark, pokeTypes} = useContext(mainContext) as PokeContext;

	const getFullPageDark = () => {
		setDark(!dark);
	};

	return (
		<div className='flex flex-col px-4 py-6 '>
			<img
				src='../../../public/img/PokeLogo.svg'
				alt='Pokemon Logo'
				className='pb-5'
			/>
			<nav className='flex justify-between'>
				<BurgerButton
					onClick={() => {
						setOpen(true);
					}}
				/>
				<Drawer open={open} setOpen={setOpen}>
					{/* - hier die Button components für die types */}
					{pokeTypes.map((type) => {
						return(
							<div>
								<Types type={type}/>
							</div>
						)
					})}
	{/* ! kann das weg ? */}
				</Drawer>
				{/* <input
					type='text'
					placeholder='Search Pokemon'
					className='border-2 rounded-full px-5 py-2 border-white bg-white text-text-outer md:px-20 md:text-2xl lg:px-40 lg:text-3xl'
				/> */}
				<img
					className="cursor-pointer md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px] transition ease-in-out hover:drop-shadow-2xl"
					onClick={getFullPageDark}
					src='../../../public/img/mode.svg'
					alt=''
				/>
			</nav>
		</div>
	);
};

export default Header;
