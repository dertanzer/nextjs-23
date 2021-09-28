import GalleryImage from '@components/GalleryImage'
import MainContainer from '@components/MainContainer'
import type { GetStaticPropsContext, NextPage } from 'next'
import { useTranslations } from 'use-intl'


const Gallery: NextPage = () => {

	const t = useTranslations('Pages');

	return (

		<MainContainer>

			<h3 className="title">{t('gallery')}</h3>

			<div className="images-container">

				<GalleryImage src="/images/769x512.jpg" alt="Helen & Hadrien" width="769" height="512" />
				<GalleryImage src="/images/960x720.jpg" alt="Helen & Hadrien" width="960" height="720" />
				<GalleryImage src="/images/600x800.jpg" alt="Helen's parents" width="600" height="800" />
				<GalleryImage src="/images/600x448.jpg" alt="Hadrien's parents" width="600" height="448" />
				<GalleryImage src="/images/800x533.jpg" alt="Hofgut Heidesheim" width="800" height="533" />

				<div className={`image-container gallery primary`}>
					<video
						width="250"
						loop
						muted
						autoPlay
					>
						<source src="/videos/wave.mp4" type="video/mp4"/>
					</video>
				</div>

			</div>


		</MainContainer>

	)
}

export const getStaticProps = async (context: GetStaticPropsContext) => {

	return {
		props: {
			localisation: {
				...require(`../localisation/${context.locale!.substring(0, 2)}.json`)
			},
		},
	};
};

export default Gallery
