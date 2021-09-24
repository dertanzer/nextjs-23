import { ImageWrapper } from '@components/ImageWrapper';
import { ImageProps } from 'next/image';

interface GalleryImageProps extends ImageProps {
	className?: string
}

export const GalleryImage: React.FC<GalleryImageProps> = ({ className = 'primary', ...props }) => {

	return (
		<ImageWrapper {...props} className={`gallery ${className}`} />
	)
}
export default GalleryImage
