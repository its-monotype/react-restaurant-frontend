import clsx from 'clsx';
import * as React from 'react';
import { useFormControl } from './FormControl';

interface IFormLabelProps {
	disabled?: boolean;
	children?: React.ReactNode;
	className?: string;
	htmlFor?: string;
}

export interface FormLabelProps extends React.HTMLAttributes<HTMLLabelElement>, IFormLabelProps {}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>((props, ref) => {
	const { children, className, htmlFor, id, ...rest } = props;
	const formControl = useFormControl(rest);

	const classes = clsx(
		'mb-2.5 block text-left align-middle text-sm leading-5 font-medium',
		formControl.disabled && 'form-label-disabled',
		className,
	);

	return (
		<label
			ref={ref}
			className={classes}
			htmlFor={htmlFor || formControl.id}
			id={id || formControl.labelId}
			{...rest}>
			{children}
			{formControl.required && <CustomRequiredIndicator />}
		</label>
	);
});

FormLabel.displayName = 'FormLabel';

export const CustomRequiredIndicator = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
	const { className, ...rest } = props;
	const classes = clsx('ml-0.5 text-sm leading-5 text-red-500', className);

	// eslint-disable-next-line react/no-children-prop
	return <span ref={ref} className={classes} aria-hidden='true' children='*' {...rest} />;
});

CustomRequiredIndicator.displayName = 'RequiredIndicator';
