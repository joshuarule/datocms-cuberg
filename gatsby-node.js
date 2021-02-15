const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsArticle {
          nodes {
            slug
          }
        }
      }
    `).then((result) => {
      result.data.allDatoCmsArticle.nodes.map(({ slug }) => {
        createPage({
          path: `/news/${slug}`,
          component: path.resolve(`./src/templates/article.js`),
          context: {
            slug: slug,
          },
        });
      });
      resolve();
    });
  });
};
