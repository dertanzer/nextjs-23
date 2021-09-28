import MainContainer from '@components/MainContainer'
import Tile from '@components/Tile'
import Wallpaper from '@components/Wallpaper'
import type { GetStaticPropsContext, NextPage } from 'next'
import React from 'react'
import { useTranslations } from 'use-intl'

const Info: NextPage = () => {

	const t = useTranslations('Info');
	const u = useTranslations('Tile');

	return (

		<MainContainer>

			<div className="tile-container">

				<Tile
					title={t('ceremony')}
					location={u('weddingPlace')}
					dateTime={new Date('October 23, 2021 13:50:00')}
					locationLink="https://www.google.com/maps/d/viewer?mid=1BXNymN8xFeGxuDuQ5NT5SMx-BfZ5_Nkj&usp=sharing"
					iframeLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.985721946568!2d8.1610715155824!3d49.57915827936464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM0JzQ1LjAiTiA4wrAwOSc0Ny43IkU!5e0!3m2!1sfr!2sde!4v1632250967092!5m2!1sfr!2sde"
					linkText={t('action')}
				/>

				<Tile
					title={t('celebration')}
					location="Hofgut Heidesheim"
					dateTime={new Date('October 23, 2021 15:30:00')}
					locationLink="https://www.google.com/maps/d/viewer?mid=1BXNymN8xFeGxuDuQ5NT5SMx-BfZ5_Nkj&usp=sharing"
					iframeLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.804113748105!2d8.195032615582502!3d49.58258387936516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM0JzU3LjMiTiA4wrAxMSc1MC4wIkU!5e0!3m2!1sfr!2sde!4v1632251178450!5m2!1sfr!2sde"
					linkText={t('action')}
				/>

			</div>

			<Wallpaper src="/images/cross-heart.png" alt="Helen & Hadrien" height="500" width="500" />

		</MainContainer>

	)
}

export const getStaticProps = async (context: GetStaticPropsContext) => {

	return {
		props: {
			localisation: {
				...require(`../localisation/${context.locale!.substring(0, 2)}.json`)
			}
		},
	};
};

export default Info
