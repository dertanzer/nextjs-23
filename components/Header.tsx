import { ButtonLink } from '@components/ButtonLink';
import { useTranslations } from 'next-intl';
import {LimiterWrapper} from '@components/LimiterWrapper';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = () => {

	const t = useTranslations('Button');
	const router = useRouter()

	const [location, setLocation] = useState('');

	useEffect(() => {

		setLocation(window.location.pathname);
	}, [router]);


	return (
		<nav>
			<LimiterWrapper>
				{ location !== '/' && <ButtonLink href="/" className="secondary">{t('start')}</ButtonLink> }
				{ location !== '/gallery' && <ButtonLink href="/gallery" className="primary">{t('gallery')}</ButtonLink> }
				{ location !== '/info' && <ButtonLink href="/info" className="tertiary">{t('info')}</ButtonLink> }
			</LimiterWrapper>
		</nav>
	)
}
export default Header
