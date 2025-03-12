import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { PropsWithChildren } from "react";

interface Props {
	open: boolean;
	setOpen: (value: boolean) => void;
}

export const Drawer: React.FunctionComponent<PropsWithChildren<Props>> = ({
	open,
	setOpen,
	children,
}) => {
	return (
		<Dialog open={open} onClose={setOpen} className='relative z-10'>
			<DialogBackdrop
				transition
				className='fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0'
			/>

			<div className='fixed inset-0 overflow-hidden'>
				<div className='absolute inset-0 overflow-hidden'>
					<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
						<DialogPanel
							transition
							className='pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700'
						>
							<div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
								<div className='px-4 sm:px-6'>
									<div className='flex items-start justify-between'>
										<DialogTitle className='text-base font-semibold text-gray-900'>
											Pokemon LOGO
										</DialogTitle>
										<div className='ml-3 flex h-7 items-center'>
											<button
												type='button'
												onClick={() => setOpen(false)}
												className='relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden'
											>
												<span className='absolute -inset-2.5' />
												<span className='sr-only'>Close panel</span>
												<p>X</p>
											</button>
										</div>
									</div>
								</div>
								<div className='relative mt-6 flex-1 px-4 sm:px-6'>
									{children}
								</div>
							</div>
						</DialogPanel>
					</div>
				</div>
			</div>
		</Dialog>
	);
};
