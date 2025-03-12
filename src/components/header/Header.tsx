import { useContext, useState } from "react";
import BurgerButton from "./BurgerButton";
import { Drawer } from "./Drawer";
import { PokeContext, mainContext } from "../../context/MainProvider";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
	const [open, setOpen] = useState(false);

	const { dark, setDark } = useContext(mainContext) as PokeContext;

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
					hier kommen die types hin
				</Drawer>
				<input
					type='text'
					placeholder='Search Pokemon'
					className='border-1 rounded-2xl px-5 py-2'
				/>
				<img
					onClick={getFullPageDark}
					src='../../../public/img/mode.svg'
					alt=''
				/>
			</nav>
		</div>
	);
};

export default Header;
