import React from 'react';

interface Props {
	time: number;
}

const Timer: React.FC<Props> = ({ time }) => {
	return (
		<div className='block px-6 py-5 rounded-md text-xl w-full mt-8 font-bold text-gray-800 border-2 border-gray-200 text-center sm:text-md outline-none'>
			<span className='digits'>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
			<span className='digits'>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
		</div>
	);
};

export default Timer;
