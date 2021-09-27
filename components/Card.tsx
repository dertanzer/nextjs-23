import CrownImage from '@components/CrownImage';
import { ImageWrapper } from '@components/ImageWrapper';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';
import { useEffect } from 'react';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const Card: React.FC = () => {

	const t = useTranslations('Card');

	useEffect(() => {

		var scrollBar = document.querySelector('.rcs-inner-container');

		ScrollTrigger.scrollerProxy(scrollBar, {
			scrollTop(value) {
				if (arguments.length) {
					scrollBar!.scrollTop = value as number;
				}
				return scrollBar!.scrollTop;
			},
			getBoundingClientRect() {
				return { top: 0, left: 0,width: window.innerWidth, height: window.innerHeight}
			}
		});

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger:  '.desktop.card',
				pin:      true,
				scroller: scrollBar,
				scrub:    0.6,
				start:    'top 150px',
				end:      '+=550px'
			},
			defaults: {
				rotation:0.01,
				z:0.01,
				duration: 1
			}
		});

		var tl1 = gsap.timeline();

		tl.set('.desktop.card .image-container.picture', {
			translateX: '50%'
		});
		tl.set('.desktop.card .image-container.background', {
			opacity: 0
		});
		tl1.set('.desktop.card .image-container.picture', {
			opacity: 0
		});

		tl1.to('.desktop.card .image-container.picture', {
			opacity: 1,
			duration: 2,
			delay: 0.4
		});

		tl.from('.desktop.card .content .image-container', {
			x:       200,
			opacity: 0,
			scale:   4,
			rotate:  360,
		}, '>0.7')
		.to('.desktop.card .image-container.picture', {
			x: 0,
			duration: 2
		}, '<')
		.from('.desktop.card .content > div:nth-child(2n)', {
			opacity:  0,
			stagger:  0.1,
			x:        -100,
			duration: 3,
			ease:     'power0'

		}, '>+1')
		.from('.desktop.card .content > div:nth-child(2n + 1)', {
			opacity:  0,
			stagger:  0.1,
			x:        100,
			duration: 3,
			ease:     'power0'
		}, '<')
		;

	}, []);

	return (

		<Fragment>

			<div className="desktop card">

				<ImageWrapper src="/images/paper-bkg.jpg" alt="Hadrien & Helen" width="500" height="707" layout="fill" className="background"/>

				<ImageWrapper src="/images/778x984.jpg" alt="Hadrien & Helen" width="778" height="984" className="picture"/>

				<div className="content">

					<div className="names lady">Helen</div>
					<div className="primary names">&</div>
					<div className="names man">Hadrien</div>

					<div className="secondary welcome">{t('welcome')}</div>
					<div className="secondary where">{t('where')}</div>

					<div className="primary ff date">{t('date')}</div>

					<span className="image">
						<CrownImage />
					</span>

				</div>

			</div>

			<div className="mobile card">

				<div className="content">

					<ImageWrapper src="/images/778x984.jpg" alt="photo of Hadrien & Helen" width="778" height="984" />

					<div className="names lady">Helen</div>
					<div className="primary names">&</div>
					<div className="names man">Hadrien</div>

					<div className="secondary welcome">{t('welcome')}</div>
					<div className="secondary where">{t('where')}</div>

					<div className="primary ff date">{t('date')}</div>

					<span className="image">
						<CrownImage />
					</span>

				</div>

			</div>

		</Fragment>
	)
}
export default Card
