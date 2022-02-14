import clsx from 'clsx';
import * as React from 'react';
import { useFormControl } from './FormControl';

export interface ITextAreaProps<T = HTMLInputElement> {
	/* Customize classes */
	className?: string;
	/* Makes TextArea disabled */
	disabled?: React.InputHTMLAttributes<T>['disabled'];
	/* Makes TextArea invalid */
	invalid?: boolean;
	/* Makes TextArea required */
	required?: React.InputHTMLAttributes<T>['required'];
	/* Makes TextArea readOnly */
	readOnly?: React.InputHTMLAttributes<T>['readOnly'];
	/**
	 * The element or component to use in place of `TextArea`
	 */
	as?: React.ElementType;
	/** */
	type?: string;
	/**
	 * A11y: A label that describes the TextArea
	 */
	'aria-label'?: string;
	/**
	 * A11y: The id of the element that describes the TextArea
	 */
	'aria-describedby'?: string;
}

export type OmittedTypes = 'disabled' | 'required' | 'checked' | 'defaultChecked' | 'readOnly';

export type InputHTMLAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedTypes>;

export type TextAreaProps<T = HTMLElement> = ITextAreaProps &
	InputHTMLAttributes &
	React.RefAttributes<T>;

export const TextArea = React.forwardRef<HTMLElement, TextAreaProps>((props, ref) => {
	const {
		as: Comp = 'textarea',
		'aria-label': ariaLabel,
		'aria-describedby': ariaDescribedby,
		className,
		type = 'text',
		id,
		...rest
	} = props;

	const { readOnly, disabled, invalid, required, ...formControl } = useFormControl(props);

	const classes = clsx(
		'text-black relative inline-flex w-full min-w-0 px-6 py-5 font-bold text-gray-800 rounded-md text-xl border-2 border-gray-200 outline-none',
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
TextArea.displayName = 'TextArea';
