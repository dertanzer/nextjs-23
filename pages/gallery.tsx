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

				<GalleryImage src="/images/photo1.jpg" alt="Helen &amp; Hadrien" height="850" width="672" className="primary" />
				<GalleryImage src="/images/photo1.jpg" alt="Helen &amp; Hadrien" height="850" width="672" className="primary" />
				<GalleryImage src="/images/photo1.jpg" alt="Helen &amp; Hadrien" height="850" width="672" className="primary" />
				<GalleryImage src="/images/photo1.jpg" alt="Helen &amp; Hadrien" height="850" width="672" className="primary" />

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
