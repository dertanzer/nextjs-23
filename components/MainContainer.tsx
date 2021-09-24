import { useEffect, useState } from "react";


interface MainContainerProps {
	children?: any
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {

	const [cssClass, setCssClass] = useState('')

	useEffect(() => {

		var className = window.location.pathname.split('/').join('-');
		className = className.slice(1);
		if (className.length === 0) {
			className = 'root';
		}
		setCssClass(className);
	}, []);

	return (
		<main className={`${cssClass} limiter`}>
			{children}
		</main>
	)
}
export default MainContainer
