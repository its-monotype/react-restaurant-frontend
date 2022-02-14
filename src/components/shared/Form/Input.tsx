import clsx from 'clsx';
import * as React from 'react';
import { useFormControl } from './FormControl';

export interface IInputProps<T = HTMLInputElement> {
	/* Customize classes */
	className?: string;
	/* Makes input disabled */
	disabled?: React.InputHTMLAttributes<T>['disabled'];
	/* Makes input invalid */
	invalid?: boolean;
	/* Makes input required */
	required?: React.InputHTMLAttributes<T>['required'];
	/* Makes input readOnly */
	readOnly?: React.InputHTMLAttributes<T>['readOnly'];
	/**
	 * The element or component to use in place of `input`
	 */
	as?: React.ElementType;
	/** */
	type?: string;
	/**
	 * A11y: A label that describes the input
	 */
	'aria-label'?: string;
	/**
	 * A11y: The id of the element that describes the input
	 */
	'aria-describedby'?: string;
}

export type OmittedTypes = 'disabled' | 'required' | 'checked' | 'defaultChecked' | 'readOnly';

export type InputHTMLAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedTypes>;

export type InputProps<T = HTMLElement> = IInputProps &
	InputHTMLAttributes &
	React.RefAttributes<T>;

export const Input = React.forwardRef<HTMLElement, InputProps>((props, ref) => {
	const {
		as: Comp = 'input',
		'aria-label': ariaLabel,
		'aria-describedby': ariaDescribedby,
		className,
		type = 'text',
		id,
		...rest
	} = props;

	const { readOnly, disabled, invalid, required, ...formControl } = useFormControl(props);

	const classes = clsx(
		'text-black relative inline-flex w-full min-w-0 items-center px-6 py-5 font-bold text-gray-800 rounded-md text-xl border-2 border-gray-200 outline-none',
		invalid && 'ring-1 ring-red-500 ring-opacity-100 border-red-500',
		disabled && 'form-field-disabled',
		className,
	);

	return (
		<Comp
			ref={ref}
			readOnly={readOnly}
			aria-readonly={readOnly}
			disabled={disabled}
			aria-disabled={disabled}
			aria-label={ariaLabel}
			aria-invalid={invalid}
			required={required}
			aria-required={required}
			aria-describedby={ariaDescribedby}
			className={classes}
			type={type}
			id={id || formControl.id}
			{...rest}
		/>
	);
});
Input.displayName = 'Input';
