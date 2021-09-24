import { Fragment } from "react"
import Head from 'next/head';

export const Layout: React.FC = ( { children }: any) => {

	return (
		<Fragment>

			<Head>
				<title>H2, Helen &amp; Hadrien's wedding</title>
				<meta name="description" content="Website for the wedding of Hadrien and Helen" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{ children }

		</Fragment>
  )
}

export default Layout;
