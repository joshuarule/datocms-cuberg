const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsArticle {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allDatoCmsArticle.edges.map(({ node: article }) => {
        createPage({
          path: `news/${article.slug}`,
          component: path.resolve(`./src/pages/article.js`),
          context: {
            slug: article.slug,
          },
        });
      });
      resolve();
    });
  });
};
