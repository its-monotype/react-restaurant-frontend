import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/shared/Button';

const HistoryPage = () => {
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate('/');
	};

	return (
		<div>
			<h1 className='mb-6 font-bold text-2xl text-gray-800 text-center'>History Page</h1>
			<p className='mb-8'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error rem est tempore eaque
				quasi esse, officia delectus itaque facilis ut cumque dolor, magni impedit?
			</p>
			<Button className='w-full' color='secondary' onClick={handleBackClick}>
				Назад
			</Button>
		</div>
	);
};

export default HistoryPage;
