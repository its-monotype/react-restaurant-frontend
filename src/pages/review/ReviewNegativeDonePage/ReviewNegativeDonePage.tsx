import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/shared/Button';

const ReviewNegativeDonePage = () => {
	const navigate = useNavigate();
	const handleBackClick = () => {
		navigate('/');
	};

	return (
		<div>
			<div className='mb-8'>
				<div className='block text-gray-800 text-xl font-extrabold text-center'>
					Спасибо, приняли, работаем!
				</div>
			</div>

			<Button className='w-full' color='secondary' onClick={handleBackClick}>
				На главную
			</Button>
		</div>
	);
};

export default ReviewNegativeDonePage;
