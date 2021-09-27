import AnimatedCrown from '@components/animation/AnimatedCrown';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import Layout from '@components/Layout';
import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import CustomScroll from 'react-custom-scroll';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {

	const [scroll, setScroll] = useState(false);
	const [angle, setAngle] = useState(0);
	const [heightContainer, setHeightContainer] = useState(0);

	const BP_Y = 0;

	const onScroll = () => {

		var footerBottomY = Math.floor(document.querySelector('footer')!.getBoundingClientRect().bottom);
		var scrollOffset = heightContainer - footerBottomY;

		scrollOffset < 0 ? 0 : scrollOffset;

		if (!scroll && scrollOffset > BP_Y) {
			setScroll(true);
		}

		if (scrollOffset < BP_Y) {
			setScroll(false);
		}

		setAngle(360 * scrollOffset /  heightContainer)

	};

	useEffect(() => {

		setHeightContainer(document.querySelector('.rcs-inner-container')!.scrollHeight)
	}, []);

	useEffect(() => {

		if (document) {

			if (scroll) {
				document.querySelector('nav')!.classList.add('scroll');
			} else {
				document.querySelector('nav')!.classList.remove('scroll');
			}
		}

	}, [scroll]);

	return (

		<Layout>
			<NextIntlProvider messages={pageProps.localisation}>
				<div className="app-container">
					<CustomScroll heightRelativeToParent="100%" onScroll={onScroll}>
						{ /* this custom scrollbar annoyws me, can't make gap scroll trigger work properly, and does not even work properly */}
						<AnimatedCrown angle={angle}/>
						<Header {...pageProps}/>
						<Component {...pageProps} />
						<Footer />
					</CustomScroll>
				</div>
			</NextIntlProvider>
		</Layout>
	)
}

export default MyApp
