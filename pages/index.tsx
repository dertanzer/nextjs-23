import CountdownWrapper from '@components/CountdownWrapper';
import MainContainer from '@components/MainContainer';
import type { GetStaticPropsContext, NextPage } from 'next';
import React from 'react';
import { Card } from './../components/Card';



const Home: NextPage = () => {

	return (

		<MainContainer>

			{/* TODO: animating the card */}
			<Card />

			<CountdownWrapper />

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
