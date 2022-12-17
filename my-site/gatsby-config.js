require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env.GATSBY_CONTENTFUL_SPACE_ID, "test ****")
console.log(process.env.GATSBY_CONTENTFUL_API_KEY, "test ****")

module.exports = {
  siteMetadata: {
    title: "ProAca Blog",
    description: "Gatsbyで作成したブログサイトです。",
    author: "SatYus"
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY
      }
    }
  ]

}