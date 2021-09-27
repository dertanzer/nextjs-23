import CrownImage from '@components/CrownImage';
import { Fragment, useEffect, useRef } from 'react';

interface AnimatedCrownProps {
	angle: number,
}

export const AnimatedCrown: React.FC<AnimatedCrownProps> = ( {angle} ) => {

	const top = useRef<HTMLDivElement>(null);
	const bottom = useRef<HTMLDivElement>(null);

	var applyRotation = (el: HTMLDivElement | null, angle: number) => {

		if (!el) { return; }
		el.style.transform = 'rotate(' + angle + 'deg)';
	};


	useEffect(() => {

		applyRotation(top.current, angle);
		applyRotation(bottom.current, -angle);
	}, [angle]);


	return (

		<Fragment>

			<CrownImage className="animated top" innerRef={top} />

			<CrownImage className="animated bottom" innerRef={bottom} />

		</Fragment>
	)
}
export default AnimatedCrown

