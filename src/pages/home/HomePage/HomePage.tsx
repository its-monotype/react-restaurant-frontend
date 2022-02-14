import React from 'react';
import Button from '../../../components/shared/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RouteNames } from '../../../components/router/AppRouter';
import { ClientContext } from '../../../context/ClientContext';

const HomePage = () => {
	const [searchParams] = useSearchParams();
	const { setClient } = React.useContext(ClientContext);

	React.useEffect(() => {
		let tableNum = searchParams.get('table');
		if (tableNum !== null) {
			setClient({
				name: 'John',
				reviews: [],
				tableNum,
			});
		}
	}, []);

	let navigate = useNavigate();

	const handleCallWaiterClick = () => {
		navigate(RouteNames.CALL_WAITER, { replace: true });
	};

	const handleLeaveFeedbackClick = () => {
		navigate(RouteNames.REVIEW, { replace: true });
	};

	const handleReadHistoryClick = () => {
		navigate(RouteNames.HISTORY, { replace: true });
	};

	return (
		<div className='space-y-4'>
			<Button className='w-full' onClick={handleCallWaiterClick}>
				Позвать официанта
			</Button>
			<Button className='w-full' onClick={handleLeaveFeedbackClick}>
				Оставить отзыв
			</Button>
			<Button className='w-full' onClick={handleReadHistoryClick}>
				Почитать Историю
			</Button>
		</div>
	);
};

export default HomePage;
