/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'fr', 'de'],
		defaultLocale: 'en',
	},
	generateBuildId: () => 'build'
}
