
interface LimiterWrapperProps {
	children?: any
}

export const LimiterWrapper: React.FC<LimiterWrapperProps> = ({ children }) => {

	return (
		<div className="limiter">
			{children}
		</div>
	)
}
export default LimiterWrapper
