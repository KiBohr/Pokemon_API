import React from "react";

interface Props {
	onClick: () => void;
}

const BurgerButton: React.FunctionComponent<Props> = ({ onClick }) => {
	return (
		<button className='relative group' onClick={onClick}>
			<div className='relative flex overflow-hidden items-center justify-center rounded-full w-[30px] h-[30px] bg-text-outer ring-1 ring-text-inner hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md'>
				<div className='flex flex-col justify-between w-[15px] h-[15px]  origin-center overflow-hidden group-focus:-rotate-180'>
					<div className='bg-text-inner h-[1px] w-7 '></div>
					<div className='bg-text-inner h-[1px] w-7 rounded  '></div>
					<div className='bg-text-inner h-[1px] w-7  '></div>
				</div>
			</div>
		</button>
	);
};

export default BurgerButton;
