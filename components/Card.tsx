import CrownImage from '@components/CrownImage';
import { ImageWrapper } from '@components/ImageWrapper';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';

export const Card: React.FC = () => {

	const t = useTranslations('Card');

	return (

		<Fragment>

			<div className="desktop card">

				<ImageWrapper src="/images/778x984.jpg" alt="photo of Hadrien & Helen" width="778" height="984" />

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
