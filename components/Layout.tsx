import { Fragment } from "react"
import Head from 'next/head';

export const Layout: React.FC = ( { children }: any) => {

	return (
		<Fragment>

			<Head>
				<title>H2, Helen & Hadrien&apos;s wedding</title>
				<meta name="description" content="Website for the wedding of Hadrien and Helen" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="robots" content="noindex" />
			</Head>

			{ children }

		</Fragment>
  )
}

export default Layout;
