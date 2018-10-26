const meta = {
  LANGUAGES: "34",
  LATEST: "0.3.3"
}

module.exports = {
  siteMetadata: {
    meta: JSON.stringify(meta)
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}