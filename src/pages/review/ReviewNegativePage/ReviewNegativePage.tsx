import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../components/router/AppRouter';
import Button from '../../../components/shared/Button';
import { FormControl } from '../../../components/shared/Form/FormControl';
import { FormErrorMessage } from '../../../components/shared/Form/FormErrorMessage';
import { FormLabel } from '../../../components/shared/Form/FormLabel';
import { Input } from '../../../components/shared/Form/Input';
import { TextArea } from '../../../components/shared/Form/TextArea';
import { ClientContext } from '../../../context/ClientContext';
import { ReviewFormSchema } from '../../../utils/validations';
import DataService from '../../../services/dataService';
import axios from 'axios';
const config = require('../../../config.json');

interface IFormData {
	name: string;
	phone: string;
	content: string;
	table: string;
}

const ReviewNegativePage: React.FC = () => {
	const { tableNum, clientId, setClientId } = React.useContext(ClientContext);
	const [loading, setLoading] = React.useState(false);
	const [isNeedTable, setIsNeedTable] = React.useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormData>({
		mode: 'onSubmit',
		resolver: yupResolver(ReviewFormSchema),
	});

	const onSubmit = async (data: IFormData) => {
		let { name, phone, content, table } = data;
		if (!table) {
			table = "0";
		}
		setLoading(true);
		if (clientId !== null && tableNum !== null) {
			try {
				await DataService.negativeReview(clientId, tableNum, name, phone, content);
				navigate(RouteNames.REVIEW_NEGATIVE_DONE);
			} catch (err) {
				alert(`Ошибка при отправке запроса: ${err}`);
			}
		}
		//  else if (!isNeedTable || !table) {
		// 	setIsNeedTable(true);
		// }
		else {
			const createResponse = await DataService.createClient(table);
			setClientId(createResponse.data.id);
			const id = createResponse.data.id;
			try {
				axios.post(`${config.NEGATIVEREVIEW_URL}`, {
					data: { id, table, name, phone, content },
				});
				navigate(RouteNames.REVIEW_NEGATIVE_DONE);
			} catch (err) {
				alert(`Ошибка при отправке запроса: ${err}`);
			}
		}
		setLoading(false);
	};

	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(RouteNames.REVIEW);
	};

	return (
		<div>
			<div className='block text-gray-800 text-xl font-extrabold text-center mb-8'>
				Печалька! Пожалуйста, напишите почему
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className='mb-4'>
				<FormControl className='mb-8' invalid={Boolean(errors.name)}>
					<FormLabel className='text-lg font-extrabold text-gray-800 mb-3'>
						Имя (необязательно)
					</FormLabel>
					<Input {...register('name')} />
					{errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
				</FormControl>

				<FormControl className='mb-8' invalid={Boolean(errors.phone)}>
					<FormLabel className='text-lg font-extrabold text-gray-800 mb-3'>
						Телефон (необязательно)
					</FormLabel>
					<Input {...register('phone')} />
					{errors.phone && <FormErrorMessage>{errors.phone.message}</FormErrorMessage>}
				</FormControl>

				<FormControl className='mb-8' invalid={Boolean(errors.content)}>
					<FormLabel className='text-lg font-extrabold text-gray-800 mb-3'>Отзыв</FormLabel>
					<TextArea className='h-40' {...register('content')} />
					{errors.content && <FormErrorMessage>{errors.content.message}</FormErrorMessage>}
				</FormControl>

				{isNeedTable && (
					<FormControl className='mb-8' invalid={Boolean(errors.table)}>
						<FormLabel className='text-lg font-extrabold text-red-600 mb-3'>
							Пожалуйста, укажите норме столика
						</FormLabel>
						<Input type='number' {...register('table')} />
						{errors.table && <FormErrorMessage>{errors.table.message}</FormErrorMessage>}
					</FormControl>
				)}

				<Button loading={loading} type='submit' className='w-full'>
					Отправить отзыв
				</Button>
			</form>
			<Button className='w-full' color='secondary' onClick={handleBackClick}>
				Назад
			</Button>
		</div>
	);
};

export default ReviewNegativePage;
