import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../components/router/AppRouter';
import Button from '../../../components/shared/Button';

const ReviewPositivePage = () => {
	let navigate = useNavigate();

	const handleYandexMapsClick = () => {
		window.open('https://google.com');
	};

	const handleGoogleMapsClick = () => {
		window.open('https://google.com');
	};

	const handleBackClick = () => {
		navigate(RouteNames.REVIEW, { replace: true });
	};

	return (
		<div>
			<div className='block text-gray-800 text-xl font-extrabold text-center mb-8'>
				Здорово! Оставьте, пожалуйста, отзыв на любом сайте
			</div>
			<div className='space-y-4'>
				<Button className='w-full' onClick={handleYandexMapsClick}>
					Yandex.Maps
				</Button>
				<Button className='w-full' onClick={handleGoogleMapsClick}>
					Google Maps
				</Button>
				<Button className='w-full' color='secondary' onClick={handleBackClick}>
					Назад
				</Button>
			</div>
		</div>
	);
};

export default ReviewPositivePage;
