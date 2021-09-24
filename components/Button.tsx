
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

/**
 * Button.
 *
 * @param {ButtonProps} props button's props
 * @returns {React.ReactElement<ButtonProps>} Button.
 */

export const Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => {

	return (

		<button className={className} {...rest}>
			{children}
		</button>
	)
}
export default Button
