import Image, { ImageProps } from 'next/image';

interface ImageWrapperProps extends ImageProps {
	className?: string
	innerRef?: React.RefObject<HTMLDivElement> | null
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({ className = '', innerRef, ...props }) => {

	return (
		<div ref={innerRef} className={`image-container ${className}`}>
			<Image {...props} />
		</div>
	)
}
export default ImageWrapper
