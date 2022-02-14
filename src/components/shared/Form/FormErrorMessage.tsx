import clsx from 'clsx';
import * as React from 'react';
import { useFormControl } from './FormControl';

interface IFormErrorMessageProps {
	children?: React.ReactNode;
	className?: string;
}

export interface FormErrorMessageProps
	extends React.HTMLAttributes<HTMLDivElement>,
		IFormErrorMessageProps {}

export const FormErrorMessage = React.forwardRef<HTMLParagraphElement, FormErrorMessageProps>(
	(props, ref) => {
		const { className, id, ...rest } = props;
		const classes = clsx(
			'mt-4 flex items-center text-sm font-semibold leading-none text-red-500',
			className,
		);
		const formControl = useFormControl({});

		return <div ref={ref} className={classes} id={id || formControl.errorId} {...rest} />;
	},
);

FormErrorMessage.displayName = 'FormErrorMessage';
