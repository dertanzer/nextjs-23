import CountdownWrapper from '@components/CountdownWrapper';
import MainContainer from '@components/MainContainer';
import Wallpaper from '@components/Wallpaper';
import type { GetStaticPropsContext, NextPage } from 'next';
import React from 'react';
import { Card } from './../components/Card';



const Home: NextPage = () => {

	return (

		<MainContainer>

			<Card />

			<CountdownWrapper />

			<Wallpaper src="/images/huguenot.png" alt="Helen & Hadrien" height="573" width="450" />

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


export default Home
