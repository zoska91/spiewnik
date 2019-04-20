module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: `spiewnik`,
    description: `Booksongs`,
    author: `Zofia Janas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "spiewnik",
        fieldName: "spiewnik",
        url:
          "https://api-euwest.graphcms.com/v1/cjtojoiuv8oin01dnbe1x5e17/master",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
  ],
}
