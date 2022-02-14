import React from 'react';
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
import { ClientContext } from '../../../context/ClientContext';

const CallWaiterPage = () => {
	const { client, setClient } = React.useContext(ClientContext);
	const [loading, setLoading] = React.useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		defaultValues: {
			tableNum: client?.tableNum,
		},
		mode: 'onSubmit',
		resolver: yupResolver(TableFormSchema),
	});

	const onSubmit = async (data: any) => {
		const { tableNum } = data;
		setLoading(true);
		setTimeout(() => {
			if (client !== null && tableNum !== client?.tableNum) {
				// обновляем столик клиента в БД
				console.log(`обновляем столик клиента в БД c ${client?.tableNum} на ${tableNum}`);
				setClient(Object.assign(client, { tableNum }));
			} else {
				// создаем клиента в БД
				setClient({
					name: 'John',
					reviews: [],
					tableNum,
				});
			}
			alert(JSON.stringify(data));
			setLoading(false);
			navigate(RouteNames.CALL_WAITER_DONE);
		}, 500);
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
