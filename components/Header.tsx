import { ButtonLink } from '@components/ButtonLink';
import { useTranslations } from 'next-intl';
import {LimiterWrapper} from '@components/LimiterWrapper';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = () => {

	const t = useTranslations('Button');

	const [location, setLocation] = useState('');
	var router = useRouter();


	useEffect(() => {

		setLocation(router.pathname);
	}, [router]);


	return (
		<nav>
			<LimiterWrapper>
				<div className="logo"><span className="letter">H</span><span className="number">2</span></div>
				{ location !== '/' && <ButtonLink href="/" className="secondary">{t('start')}</ButtonLink> }
				{ location !== '/gallery' && <ButtonLink href="/gallery" className="primary">{t('gallery')}</ButtonLink> }
				{ location !== '/info' && <ButtonLink href="/info" className="tertiary">{t('info')}</ButtonLink> }
			</LimiterWrapper>
		</nav>
	)
}
export default Header