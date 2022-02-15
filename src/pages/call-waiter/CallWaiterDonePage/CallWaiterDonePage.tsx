import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../components/router/AppRouter';
import Button from '../../../components/shared/Button';
import { ClientContext } from '../../../context/ClientContext';
import Timer from './StopWatch';

const CallWaiterDonePage = () => {
	const { tableNum } = React.useContext(ClientContext);
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(RouteNames.CALL_WAITER);
	};

	return (
		<div>
			<div className='mb-8'>
				<div className='block text-gray-800 text-xl font-extrabold text-center'>
					Зовем официанта к вашему столику #{tableNum}
				</div>
				<Timer />
			</div>

			<Button className='w-full' color='secondary' onClick={handleBackClick}>
				Назад
			</Button>
		</div>
	);
};

export default CallWaiterDonePage;
