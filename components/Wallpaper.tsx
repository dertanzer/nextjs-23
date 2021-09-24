import { ImageWrapper } from '@components/ImageWrapper';
import { ImageProps } from 'next/image';

interface WallpaperProps extends ImageProps {
	className?: string
}

export const Wallpaper: React.FC<WallpaperProps> = ({ className = '', ...props }) => {

	return (
		<ImageWrapper {...props} className={`wallpaper ${className}`} />
	)
}
export default Wallpaper
