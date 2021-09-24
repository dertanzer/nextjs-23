import ImageWrapper from './ImageWrapper';

interface CrownImageProps {
	className?: string
	innerRef?: React.RefObject<HTMLDivElement> | null
}

export const CrownImage: React.FC<CrownImageProps> = ( {className = '', innerRef} ) => {

	return <ImageWrapper src="/images/crown.png" alt="Crown of flowers" width="1390" height="1678" className={className} innerRef={innerRef}/>
}
export default CrownImage;
