import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import RichText from "../components/RichText";

// import SEO from '../components/SEO';

const BlogPost = ({ data: { article } }) => {
  return (
    <Layout>
      <div className="container pt-g my-g">
        <h1 className="h2 mb-c max-w-3xl">{article.title}</h1>
        <div className="mb-e">
          <datetime>{article.publishedDate}</datetime> |{" "}
          {article.articleCategories.map((node) => {
            return <span>{node.category}</span>;
          })}
        </div>
        <Img
          fluid={article.primaryImage.fluid}
          alt={article.primaryImage.alt}
        />
        {/* content switcher */}
        {/* <RichText content={article.con} /> */}
        {/* Video */}
        {/* Image */}
      </div>
    </Layout>
  );
};

export const projectQuery = graphql`
  query($slug: String!) {
    article: datoCmsArticle(slug: { eq: $slug }) {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      publishedDate(formatString: "MMMM D, YYYY")
      primaryImage {
        alt
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      articleCategories {
        category
      }
      content {
        ... on DatoCmsRichText {
          internal {
            type
          }
          richTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on DatoCmsImageBlock {
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          internal {
            type
          }
        }
        ... on DatoCmsVideoBlock {
          internal {
            type
          }
          video {
            provider
            url
          }
        }
      }
    }
  }
`;

export default BlogPost;
