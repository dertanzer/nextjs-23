import { Fragment } from "react"
import Head from 'next/head';

export const Layout: React.FC = ( { children }: any) => {

	return (
		<Fragment>

			<Head>
				<title>H2, Helen & Hadrien&apos;s wedding</title>
				<meta name="description" content="Website for the wedding of Hadrien and Helen" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="robots" content="noindex" />
			</Head>

			{ children }

		</Fragment>
  )
}

export default Layout;
