import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../components/router/AppRouter';
import Button from '../../../components/shared/Button';

import { yupResolver } from '@hookform/resolvers/yup';
import { TableFormSchema } from '../../../utils/validations';
import { useForm } from 'react-hook-form';
import { Input } from '../../../components/shared/Form/Input';
import { FormLabel } from '../../../components/shared/Form/FormLabel';
import { FormControl } from '../../../components/shared/Form/FormControl';
import { FormErrorMessage } from '../../../components/shared/Form/FormErrorMessage';
import DataService from '../../../services/dataService';
import { ClientContext } from '../../../context/ClientContext';
const config = require('../../../config.json');

const CallWaiterPage = () => {
	const { clientId, tableNum, setClientId, setTableNum } = React.useContext(ClientContext);
	const [loading, setLoading] = React.useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		defaultValues: {
			tableNum,
		},
		mode: 'onSubmit',
		resolver: yupResolver(TableFormSchema),
	});

	const onSubmit = async (data: any) => {
		const { tableNum } = data;
		setLoading(true);
		let id;
		if (clientId === null) {
			let response;
			try {
				response = await DataService.createClient(tableNum);
			} catch (err) {
				alert(`Ошибка при отправке запроса: ${err}`);
				return;
			}
			setClientId(response.data.id);
			id = response.data.id;
		} else {
			id = clientId;
		}
		try {
			axios.post(`${config.API_URL}/call-waiter`, { data: { id, tableNum } });
			setTableNum(tableNum);
			setLoading(false);
			navigate(RouteNames.CALL_WAITER_DONE);
		} catch (err) {
			alert(`Ошибка при отправке запроса: ${err}`);
			return;
		}
	};

	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate('/');
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className='mb-4'>
				<FormControl className='mb-8' invalid={Boolean(errors.tableNum)}>
					<FormLabel className='text-center text-xl font-extrabold text-gray-800 mb-5'>
						Пожалуйста, проверьте номер стола:
					</FormLabel>
					<Input type='number' {...register('tableNum')} />
					{errors.tableNum && <FormErrorMessage>{errors.tableNum.message}</FormErrorMessage>}
				</FormControl>

				<Button loading={loading} type='submit' className='w-full'>
					Позвать официанта
				</Button>
			</form>
			<Button className='w-full' color='secondary' onClick={handleBackClick}>
				Назад
			</Button>
		</div>
	);
};

export default CallWaiterPage;
