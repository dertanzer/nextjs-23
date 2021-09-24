import Link from 'next/link';

export interface ButtonAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
	className?: string,
	href: string
}

/**
 * ButtonLink.
 *
 * @param {ButtonAnchorProps} props ButtonAnchor's props
 * @returns {React.ReactElement<ButtonAnchorProps>} ButtonAnchor.
 */

export const ButtonLink: React.FC<ButtonAnchorProps> = ({ className = '', href, children, ...rest }) => {

	return (

		<Link href={href}>
			<a className={ `button ${className}`} {...rest}>
				{ children }
			</a>
		</Link>
  )
}
export default ButtonLink
