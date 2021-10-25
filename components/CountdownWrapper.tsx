import ImageWrapper from '@components/ImageWrapper';
import { GetStaticPropsContext } from 'next';
import { Fragment } from 'react';
import Countdown from "react-countdown";
import { useTranslations } from 'next-intl';

interface CountdownWrapper {
	children: any,
	language: string
}

export const CountdownWrapper: React.FC<CountdownWrapper> = () => {

	const t = useTranslations('Time');

	const customRender = ( rest:any ) => {

		var props = {
			days: t('days'),
			hours: t('hours'),
			minutes: t('minutes'),
			seconds: t('seconds')
		}

		return renderer({ ...rest, props});
	};

	return (
		<Fragment>

			<div className="countdown">

				<div className="heading">
					<ImageWrapper src="/images/dove-green.png" alt="dove" layout="intrinsic" width="100" height="129" className="dove"/>
					<div className="text">{t('date')}</div>
					<ImageWrapper src="/images/dove-green.png" alt="dove" layout="intrinsic" width="100" height="129" className="horizontal-flip dove" />
				</div>

				<Countdown
					date={new Date('October 23, 2021 13:50:00')}
					renderer={customRender}
					daysInHours={false}
				/>
			</div>
		</Fragment>
	)
}
export default CountdownWrapper

type rendererProps = {
	days: any,
	hours: any,
	minutes: any,
	seconds: any,
	completed: any,
	props: any
};

const renderer = ({ days, hours, minutes, seconds, completed, props }: rendererProps) => {

	if (completed) {

		return (
			<ImageWrapper src="/images/married.jpg" alt="bride and bridegroom" width="1281" height="1920"/>
		)

	} else {
		return (
			<Fragment>

				<div className="container">

					<div className="box">
						<span className="counter-element">{days}</span>
						{props.days}
					</div>

					<div className="box">
						<span className="counter-element">{hours}</span>
						{props.hours}
					</div>

					<div className="box">
						<span className="counter-element">{minutes}</span>
						{props.minutes}
					</div>

					<div className="box">
						<span className="counter-element">{seconds}</span>
						{props.seconds}
					</div>

				</div>

			</Fragment>

		);
	}
};

export const getStaticProps = async (context: GetStaticPropsContext) => {

	return {
		props: {
			localisation: {
				...require(`../localisation/${context.locale!.substring(0, 2)}.json`)
			},
			language: context.locale!.substring(0, 2)
		},
	};
};