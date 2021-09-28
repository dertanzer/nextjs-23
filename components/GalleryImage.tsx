import { ImageWrapper } from '@components/ImageWrapper';
import { ImageProps } from 'next/image';
import { memo } from 'react';

interface GalleryImageProps extends ImageProps {
	className?: string
}

export const GalleryImage: React.FC<GalleryImageProps> = ({ className = 'primary', ...props }) => {

	var getRandomClassName = function () {

		const classNames = [ 'primary', 'secondary', 'fourth'];

		var getRandomInt = function(max: number) {
			return Math.floor(Math.random() * max);
		};

		return classNames[getRandomInt(3)];
	};

	return (
		<ImageWrapper {...props} className={`gallery ${className} ${getRandomClassName()}`}/>
	)
}
export default memo(GalleryImage)
