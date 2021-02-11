module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: "This is my personal blog.",
    author: `@gatsbyjs`,
  },
  plugins: [
	'gatsby-transformer-remark',
	{
		resolve: `gatsby-source-filesystem`,
		options: {
			name: `pages`,
			path: `${__dirname}/src/pages/`
		}
	}
],
}
