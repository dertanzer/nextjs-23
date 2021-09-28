import MapSvg from '@components/MapSvg';
import Modal from '@components/Modal';
import { Fragment, useState } from 'react';
import ButtonLink from '@components/ButtonLink';
import { useTranslations } from 'next-intl';

interface TileProps {
	title: string,
	location: string,
	dateTime: Date,
	locationLink: string,
	iframeLink: string,
	linkText: string
}

export const Tile: React.FC<TileProps> = ({ title, location, iframeLink, locationLink, linkText, dateTime }) => {

	const [show, setShow] = useState(false);

	const t = useTranslations('Tile');

	const time = new Intl.DateTimeFormat('default', {
		hour: '2-digit',
		minute: '2-digit'
	}).format(dateTime);

	return (

		<Fragment>

			<div className="tile">

				<h3 className="title">{title}</h3>

				<div className="content">

					<ul className="fields">
						<li className="field">
							<span className="key">{t('location')}</span>
							<span className="value map-svg" onClick={() => setShow(prev => !prev)}>
								<MapSvg />
							</span>
						</li>
						<li className="field">
							<span className="key">{t('time')}</span>
							<span className="value">{time}</span>
						</li>
					</ul>

				</div>

			</div>

			<Modal show={show} onClose={setShow}>

				<div className="title">{location}</div>
				<iframe src={iframeLink} frameBorder="0" width="400" height="300">
				</iframe>
				<ButtonLink href={locationLink} className="secondary" target="_blank">{linkText}</ButtonLink>

			</Modal>

		</Fragment>
	)
}
export default Tile
