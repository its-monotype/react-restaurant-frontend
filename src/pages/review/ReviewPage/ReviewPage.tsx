import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../components/router/AppRouter';
import Button from '../../../components/shared/Button';

const ReviewPage = () => {
	const navigate = useNavigate();

	const handlePositiveClick = () => {
		navigate(RouteNames.REVIEW_POSITIVE);
	};

	const handleNegativeClick = () => {
		navigate(RouteNames.REVIEW_NEGATIVE);
	};

	const handleBackClick = () => {
		navigate('/');
	};

	return (
		<div>
			<h1 className='mb-6 font-bold text-2xl text-gray-800 text-center'>Вам понравилось у нас?</h1>
			<div className='space-y-4'>
				<Button className='w-full' color='primary' onClick={handlePositiveClick}>
					<span>Да</span>
					<span className='ml-1.5'>👍</span>
				</Button>
				<Button className='w-full' color='primary' onClick={handleNegativeClick}>
					<span>Не очень</span>
					<span className='ml-1.5'>👎</span>
				</Button>
				<Button className='w-full' color='secondary' onClick={handleBackClick}>
					Назад
				</Button>
			</div>
		</div>
	);
};

export default ReviewPage;
