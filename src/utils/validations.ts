import * as yup from 'yup';
import { phoneRegExp } from './regex';

export const TableFormSchema = yup.object().shape({
	tableNum: yup
		.number()
		.typeError('Пожалуйста, введите корректный номер стола')
		.positive('Пожалуйста, введите корректный номер стола')
		.required('Пожалуйста, введите номер стола')
		.min(1, 'Пожалуйста, введите корректный номер стола')
		.max(99, 'Пожалуйста, введите корректный номер стола'),
});

export const ReviewFormSchema = yup.object().shape({
	name: yup.string(),
	phone: yup
		.string()
		.matches(phoneRegExp, {
			message: 'Пожалуйста, введите корректный номер телефона',
			excludeEmptyString: true,
		}),
	content: yup.string().required('Пожалуйста, введите отзыв'),
});
