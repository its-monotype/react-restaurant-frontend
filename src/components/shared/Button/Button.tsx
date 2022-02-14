import React from 'react';
import clsx from 'clsx';

enum ButtonColorsClasses {
	primary = 'bg-gray-700 text-white hover:bg-opacity-90 active:bg-gray-800 transition-all focus:bg-gray-800',
	secondary = 'bg-gray-500 text-white hover:bg-opacity-90 active:bg-gray-600 transition-all',
}

type ButtonColors = keyof typeof ButtonColorsClasses;

interface IButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		React.AriaAttributes {
	color?: ButtonColors;
	className?: string;
	loading?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
	const { children, loading, color = 'primary', className, ...rest } = props;

	return (
		<button
			className={clsx(
				'relative h-[70px] px-14 text-lg font-bold rounded-md outline-none border-none text-center inline-flex w-full justify-center items-center',
				ButtonColorsClasses[color],
				className,
				loading && 'bg-opacity-50',
			)}
			{...rest}>
			{loading ? (
				<svg
					className={'animate-spin h-4 w-4 text-white'}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'>
					<circle
						className='opacity-25'
						cx='12'
						cy='12'
						r='10'
						stroke='currentColor'
						strokeWidth='4'></circle>
					<path
						className='opacity-75'
						fill='currentColor'
						d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
				</svg>
			) : (
				children
			)}
		</button>
	);
};

export default Button;
