require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        tailwind: true,
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true,
        svgo: true,
        replaceAttrValues: {
          "#000000": "currentColor",
          "#000": "currentColor",
        },
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cuberg.net`,
        short_name: `cuberg`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/assets/images/favicon.png",
      },
    },
  ],
};
