import { FC } from 'react';

const Layout: FC = ({ children }) => {
	return (
		<>
			<main className='flex h-screen justify-center items-center bg-white sm:bg-gray-900'>
				<div className='w-full sm:w-[500px] h-auto px-4 sm:px-10 py-14  rounded-lg bg-white flex justify-center text-left item-start'>
					{children}
				</div>
			</main>
		</>
	);
};

export default Layout;
