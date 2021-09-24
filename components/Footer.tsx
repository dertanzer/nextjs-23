import { ButtonLink } from '@components/ButtonLink';
import { useTranslations } from 'next-intl';
import { LimiterWrapper } from '@components/LimiterWrapper';


interface FooterProps {
}

export const Footer: React.FC<FooterProps> = () => {

	const t = useTranslations('Button');

	const subject = t('subject').split(' ').join('%20');
	const email = 'hl-01@hotmail.fr';

	return (
		<footer>
			<LimiterWrapper>
				<ButtonLink href="https://paypal.me/pools/c/8DdNOp3Juf" className="fourth">{t('gift')}</ButtonLink>
				<ButtonLink className="secondary" href={`mailto:${email}?subject=${subject}`}>{t('rsvp')}</ButtonLink>
				<ButtonLink href="https://bodick.smugmug.com/upload/xFTTTR/eglise" className="tertiary">{t('share')}</ButtonLink>
			</LimiterWrapper>
		</footer>
	)
}

export default Footer
